import CardList from "../components/Posts/CardList"
import ViewUserBtn from "../components/Posts/ViewUserBtn"

const base_url = "https://jsonplaceholder.typicode.com/posts"

interface Iposts {
  userId: number,
  id: number,
  title: string,
  body: string
} // kebutuhan validasi, data yg diambil hanya yg di deklarasikan

const Posts = async() => {
  const response = await fetch(base_url, {
    // cache: 'no-store' //ambil data ketika runtime atau di request
    // next: { revalidate: 3600 } // fetch data secara berkala
  })
  const posts: Iposts[] = await response.json() //Iposts diberi tanda array
  return (
    <>
      <p>{new Date().toLocaleTimeString()}</p>
      <h1 className="text-fuchsia-500">Post Page</h1>
      {posts.map((post) =>{
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <i>{post.title}</i>
            <p>{post.body}</p>
            <ViewUserBtn userId={post.userId}/>
          </CardList>
        )
      })}
    </>
  )
}

export default Posts
