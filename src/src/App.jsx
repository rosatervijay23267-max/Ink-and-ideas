export default function App() {
  const posts = [
    {
      category: 'Tech',
      title: 'Building Better Things on the Web',
      date: 'May 30, 2026',
      excerpt:
        'Web par clean, useful aur beautiful cheezein banana mujhe hamesha exciting lagta hai.',
    },
    {
      category: 'Lifestyle',
      title: 'Slow Living in a Fast World',
      date: 'May 22, 2026',
      excerpt: 'Kabhi kabhi dheere chalna bhi progress hota hai.',
    },
    {
      category: 'Travel',
      title: 'Notes from the Road',
      date: 'May 10, 2026',
      excerpt:
        'Safar hamesha destination se zyada yaadon ke baare mein hota hai.',
    },
  ];

  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        maxWidth: '720px',
        margin: '0 auto',
        padding: '48px 24px',
        lineHeight: 1.6,
      }}
    >
      <header style={{ marginBottom: '48px' }}>
        <h1
          style={{
            fontSize: '42px',
            marginBottom: '8px',
          }}
        >
          Ink & Ideas
        </h1>

        <p style={{ color: '#666' }}>
          Thoughts on tech, life, and the stories in between.
        </p>
      </header>

      {posts.map((post) => (
        <article
          key={post.title}
          style={{
            padding: '24px',
            marginBottom: '20px',
            border: '1px solid #eee',
            borderRadius: '16px',
            background: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '12px',
              fontSize: '14px',
              color: '#777',
              marginBottom: '8px',
            }}
          >
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h2
            style={{
              fontSize: '28px',
              margin: '0 0 12px',
            }}
          >
            {post.title}
          </h2>

          <p
            style={{
              margin: 0,
              color: '#555',
            }}
          >
            {post.excerpt}
          </p>
        </article>
      ))}
    </div>
  );
}
