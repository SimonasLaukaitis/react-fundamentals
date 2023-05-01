import { useState , useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';


const HomeNew = () => {
    //data: blogs( paliekam pavadinima, bet siuo atveju vadinkim ji data)
   const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
  

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ]);

const [name,setName] = useState('mario');

    //   const handleDelete = (id) => {
    //         const newBlogs = blogs.filter(blog => blog.id !== id);
    //         setBlogs(newBlogs);
    //   }



    return ( 
        <div className="home">

            {/* loading pranesimas */}
            {isPending && <div>Loading...</div>}

            {/* Pranesam vartotojui , jei ivyko klaida kraunant is serverio duomenis */}
            { error && <div>{ error }</div>}

            {/* isemiau  handleDelete = {handleDelete} */}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"  />}
            
            <button onClick={() => {setName('luigi')}}>change name</button>
            <p>{ name }</p>

        </div>
     );
}
 
export default HomeNew;