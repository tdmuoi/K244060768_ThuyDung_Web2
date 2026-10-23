// classes/text-similarity.ts
// Các hàm tính độ tương đồng giữa 2 đoạn văn bản (Cosine, Jaccard)

// Tách văn bản thành danh sách từ (token):
// chữ thường, bỏ dấu tiếng Việt, bỏ ký tự đặc biệt
export function tokenize(text: string): string[] {
    return (text ?? '')
        .toLowerCase()
        .normalize('NFD').replace(/[̀-ͯ]/g, '') // Bỏ dấu tiếng Việt
        .replace(/đ/g, 'd')
        .replace(/[^a-z0-9]+/g, ' ') // Ký tự đặc biệt => khoảng trắng
        .split(' ')
        .filter(t => t.length > 0);
}

// Đếm số lần xuất hiện của từng từ (Term Frequency)
function termFrequency(tokens: string[]): Map<string, number> {
    const tf = new Map<string, number>();
    for (const t of tokens) {
        tf.set(t, (tf.get(t) ?? 0) + 1);
    }
    return tf;
}

// Cosine Similarity = (A.B) / (|A| * |B|) với A, B là vector tần suất từ
export function cosineSimilarity(tokensA: string[], tokensB: string[]): number {
    if (tokensA.length == 0 || tokensB.length == 0) return 0;
    const tfA = termFrequency(tokensA);
    const tfB = termFrequency(tokensB);
    let dot = 0;
    tfA.forEach((countA, term) => {
        dot += countA * (tfB.get(term) ?? 0);
    });
    let normA = 0;
    tfA.forEach(count => normA += count * count);
    let normB = 0;
    tfB.forEach(count => normB += count * count);
    // Math.min để tránh sai số làm tròn vượt quá 1
    return Math.min(1, dot / (Math.sqrt(normA) * Math.sqrt(normB)));
}

// Jaccard Similarity = |A ∩ B| / |A ∪ B| với A, B là tập hợp từ
export function jaccardSimilarity(tokensA: string[], tokensB: string[]): number {
    const setA = new Set(tokensA);
    const setB = new Set(tokensB);
    if (setA.size == 0 || setB.size == 0) return 0;
    let intersection = 0;
    setA.forEach(term => {
        if (setB.has(term)) intersection++;
    });
    const union = setA.size + setB.size - intersection;
    return intersection / union;
}
