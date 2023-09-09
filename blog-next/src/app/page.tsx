import React from "react";

type Post = {
  title : string,
  description: string,
  content : string
}

interface Resp<type>
{
  id: number,
  attributes : type
}

export default async function Home() {
  
  const res : Resp<Post>[] = (await(await fetch( "http://localhost:1337/api/posts", {cache : "no-store"})).json())["data"];
  
  console.log(res);

  return (
    <div>
      { res[0].attributes.title } { res.length }
    </div>
  )
}
