// カテゴリボタンでポートフォリオアイテムをフィルター表示
document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // ボタンの active クラス切り替え
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // ポートフォリオ表示切り替え
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (category === 'all' || itemCategory === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
