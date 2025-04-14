'use client'

import hygraph from "@/lib/hygraphClient";
import { useEffect, useState } from "react";
import { GET_BLOG_QUERY } from '@/query/service'


export default function Blogs() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data: any = await hygraph.request(GET_BLOG_QUERY);
        setPosts(data.blog);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mt-1 text-2xl">
        Stories Behind the Code
      </div>

      <div className="flex flex-wrap justify-between mt-10 gap-5">
        <div className="w-screen text-[#5E5F6E] text-center border-t-4 border-b-4 border-double border-gray-300 p-5">
          Comming Soon....!
        </div>


      </div>
    </div>
  )
}



