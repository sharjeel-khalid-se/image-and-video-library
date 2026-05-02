import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setResults , setError, setLoading} from '../redux/features/searchSlice'
import ResultCard from './ResultCard'


const ResultGrid = () => {
    const [result, setResult] = useState("")
    const {activeTab,query, results, error, loading} = useSelector((state)=>state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading())

        const getData = async()=>{
           try {
              let data
            if(activeTab == 'photos'){
                let res = await fetchPhotos(query)
                data = res.results.map((item)=>({
                    id : item.id,
                    title : item.alt_description,
                    type : "photo",
                    src : item.urls.full,
                    thumbnail : item.urls.small,
                    url : item.links.html
                }))
            } else if(activeTab == "videos"){
                let res = await fetchVideos(query)

                data = res.videos.map((item)=>({
                    id : item.id,
                    thumbnail : item.video_pictures[0].picture,
                    title : item.user.name || "video",
                    src : item.video_files[0].link,
                    type : "video",
                    url : item.url
                }))
            }
            setResult(data)
            dispatch(setResults(data))
           } catch (error) {
            console.error("Error fetching data:", error.message)
            setError(error)
           }
        }
        getData()
    }, [activeTab, query,  ])

    if(error) return <p>"Erro "{error}</p>
    if(loading) return <p>Loading...</p>
    if(!query) return
  return (
    <div className='flex flex-wrap justify-between w-full p-10 overflow-auto gap-5'>
        {results.map((item, idx)=>{
            return <div key={idx}>
                <ResultCard item={item}/>
            </div>
        })}
    </div>
  )
}

export default ResultGrid