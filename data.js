// News Data - Easy to edit and add posts
// Add new posts to this array to update the news section
// Format: { date: "YYYY-MM-DD", title: "...", excerpt: "...", content: "..." }

const newsData = [
    {
        date: "2026-03-05",
        title: "Lorem Ipsum Dolor Sit Amet",
        excerpt: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas."
    },
    {
        date: "2026-03-01",
        title: "Nemo Enim Ipsam Voluptatem",
        excerpt: "Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
        content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
    {
        date: "2026-02-25",
        title: "Ut Enim ad Minima Veniam",
        excerpt: "Quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi.",
        content: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
    },
    {
        date: "2026-02-20",
        title: "Sed ut Perspiciatis Unde Omnis",
        excerpt: "Iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.",
        content: "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
        date: "2026-02-15",
        title: "Sed Quia Non Numquam Eius Modi",
        excerpt: "Tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem ut enim.",
        content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
    },
    {
        date: "2026-02-10",
        title: "Similique Sunt in Culpa Qui",
        excerpt: "Officia deserunt mollitia animi id est laborum et dolorum fuga et harum quidem rerum.",
        content: "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam."
    }
];

/**
 * Function to add a new news post
 * Call this with the post details to update the news section dynamically
 * Example: addNewsPost("2026-03-06", "Title", "Excerpt", "Full content...")
 */
function addNewsPost(date, title, excerpt, content) {
    newsData.unshift({ date, title, excerpt, content });
    renderNews();
}

/**
 * Get news posts from specific date range
 * Usage: getNewsPosts("2026-02-01", "2026-03-31")
 */
function getNewsPosts(startDate, endDate) {
    return newsData.filter(post =>
        post.date >= startDate && post.date <= endDate
    );
}

/**
 * Format date to Swedish format
 */
function formatDate(dateString) {
    const date = new Date(dateString + "T00:00:00Z");
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    };
    return date.toLocaleDateString('sv-SE', options);
}
