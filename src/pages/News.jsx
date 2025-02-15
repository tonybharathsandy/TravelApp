/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
function News() {
  let [data, setData] = useState([])
  let [page, setPage] = useState([])
  let [nextPage, setNextPage] = useState("")
  let dispatch = useDispatch()
  useEffect(()=>{
    newsData()
       dispatch({type : "removeData", value : {}})
        dispatch({type : "NOCARD", payload : {} })
  }, [nextPage])
async function newsData() {
  try{
          let response = await fetch(`https://newsdata.io/api/1/latest?apikey=pub_691813bcd6db7b81cbafcea932b478604fdd9${nextPage ? `&page=${nextPage}`: ""}`)
         
            let api1 = await response.json()
             setData(api1.results)
             setPage(api1)

  }catch{
      console.error("News Data is not Fetching")
  }
}
console.log("uyvutv",page)

function handlePage(){
  if(page.nextPage){
    setNextPage(page.nextPage)
  }
}
  
  return (
    <>
       <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900" style={{textAlign:"center"}}>Latest News </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {data.map((value) => (
            <div key={value.article_id} className="group relative">
            <p className="text-1xl font-bold">
            {
              value.title.length > 72 ? value.title.slice(0, 72) + "..." : value.title
            }</p>
              <img
                src={value.image_url || "https://via.placeholder.com/400"}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="mt-1 text-sm text-gray-500">
                  {
                   value.description && value.description.length > 250 ? value.description.slice(0, 250) + "..." : value.description
                  }
                  </p>
                </div>
               
              </div>
              <div className="mt-3">
              <Link to={value.link} className="bg-blue-600 p-2 rounded text-white">Open News</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display :"flex", justifyContent:"center"}}>
      <div>
      {
        page.nextPage && ( <button onClick={handlePage} style={{backgroundColor:"red", padding:"5px 10px", borderRadius:"5px", color:"white", cursor:"pointer"}}>Next Page</button>)
      }
      </div>
      </div>
    </div>
    </>
  )
}

export default News