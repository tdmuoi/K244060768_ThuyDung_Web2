import { Component, computed, signal } from '@angular/core';
import { FashionAPIService } from '../services/fashion-apiservice';
import { Fashion } from '../classes/Fashion';
import { cosineSimilarity, jaccardSimilarity, tokenize } from '../classes/text-similarity';

// Một dòng kết quả tìm kiếm: Fashion + độ tương đồng
export interface FashionSearchResult {
  fashion: Fashion;
  similarity: number;
}

@Component({
  selector: 'app-search-fashion-component',
  standalone: false,
  templateUrl: './search-fashion-component.html',
  styleUrl: './search-fashion-component.css',
})
export class SearchFashionComponent {
  fashions = signal<Fashion[]>([]);
  errMessage = signal('')
  loading = signal(true)
  // Các lựa chọn tìm kiếm
  keyword = signal('')
  searchField = signal<'fashion_subject' | 'fashion_detail'>('fashion_subject')
  measure = signal<'Cosine' | 'Jaccard'>('Cosine')
  topN = signal<number>(5)  // 0 = hiển thị tất cả
  topNOptions = [3, 5, 10, 20, 0]

  // Tất cả Fashion tìm thấy (Similarity > 0), sắp xếp Similarity giảm dần
  results = computed<FashionSearchResult[]>(() => {
    const queryTokens = tokenize(this.keyword())
    if (queryTokens.length == 0) return []
    const field = this.searchField()
    const measure = this.measure()
    return this.fashions()
      .map(f => {
        const fieldTokens = tokenize(f[field])
        const similarity = measure == 'Cosine'
          ? cosineSimilarity(queryTokens, fieldTokens)
          : jaccardSimilarity(queryTokens, fieldTokens)
        return { fashion: f, similarity: similarity }
      })
      .filter(r => r.similarity > 0)
      .sort((a, b) => b.similarity - a.similarity)
  })
  // Kết quả hiển thị theo số lượng người dùng chọn
  displayedResults = computed(() => {
    const n = this.topN()
    return n == 0 ? this.results() : this.results().slice(0, n)
  })

  constructor(private _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => {
        //restore object model from json để dùng được getBase64String()
        this.fashions.set(data.map((f: any) => Object.assign(new Fashion(), f)))
        this.loading.set(false)
      },
      error: (err) => {
        this.errMessage.set(err.message)
        this.loading.set(false)
      }
    })
  }

  // Tô màu dòng theo mức Similarity
  similarityClass(similarity: number): string {
    if (similarity >= 0.75) return 'sim-high'    // [0.75 -> 1]
    if (similarity >= 0.5) return 'sim-medium'   // [0.5 -> 0.75)
    return 'sim-low'                             // < 0.5
  }

  clearSearch() {
    this.keyword.set('')
  }
}
