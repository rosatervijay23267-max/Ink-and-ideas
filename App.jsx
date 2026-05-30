
export default function App() {
  const posts = [
    { category: 'Tech', title: 'Building Better Things on the Web', date: 'May 30, 2026', excerpt: 'Web par clean, useful aur beautiful cheezein banana mujhe hamesha exciting lagta hai.'},
    { category: 'Lifestyle', title: 'Slow Living in a Fast World', date: 'May 22, 2026', excerpt: 'Kabhi kabhi dheere chalna bhi progress hota hai.'},
    { category: 'Travel', title: 'Notes from the Road', date: 'May 10, 2026', excerpt: 'Safar hamesha destination se zyada yaadon ke baare mein hota hai.'},
  ];
  return <div style={{fontFamily:'sans-serif',padding:'40px'}}><h1>Ink & Ideas</h1>{posts.map(p=><div key={p.title}><h2>{p.title}</h2><p>{p.excerpt}</p></div>)}</div>
}
