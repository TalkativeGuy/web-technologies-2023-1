const getPostDetail = async (postId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const post = await response.json()
        return post
    } catch (error) {
        console.error("Ошибка при получении деталей поста:", error)
        return null
    }
}

const getPostComments = async (postId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        const comments = await response.json()
        return comments
    } catch (error) {
        console.error("Ошибка при получении комментариев к посту:", error)
        return []
    }
}

const renderPostDetailPage = async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const postId = urlParams.get('id')

    if (!postId) {
        document.getElementById('post-detail').innerHTML = '<p>Пост не найден</p>'
        return
    }

    const post = await getPostDetail(postId)
    const comments = await getPostComments(postId)

    if (post) {
        document.getElementById('post-detail').innerHTML = `
            <div class="post-detail">
                <h1>${post.title}</h1>
                <p>${post.body}</p>
                <h2>Комментарии:</h2>
                <div class="comments">
                    ${comments.map(comment => `
                        <div class="comment">
                            <h3>${comment.name} (${comment.email})</h3>
                            <p>${comment.body}</p>
                        </div>
                    `).join('')}
                </div>
                <a href="/catalog.html">Назад к списку постов</a>
            </div>
        `
    } else {
        document.getElementById('post-detail').innerHTML = '<p>Ошибка загрузки данных поста</p>'
    }
}

document.addEventListener('DOMContentLoaded', renderPostDetailPage)