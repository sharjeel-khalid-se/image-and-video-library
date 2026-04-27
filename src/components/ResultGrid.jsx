import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaApi'
import { setResults , setError, setLoading} from '../redux/features/searchSlice'


const ResultGrid = () => {
    const [result, setResult] = useState("")
    const {activeTab,query, results, error, loading} = useSelector((state)=>state.search)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setLoading())
        const getData = async()=>{
           try {
              let data
              console.log(activeTab)
            if(activeTab == 'photos'){
                let res = await fetchPhotos(query)
                data = res.results.map((item)=>({
                    id : item.id,
                    title : item.alt_description,
                    type : "photo",
                    src : item.urls.full,
                    thumbnail : item.urls.small
                }))
            } else if(activeTab == "videos"){
                let res = await fetchVideos(query)
                data = res.videos.map((item)=>({
                    id : item.id,
                    thumbnail : item.image,
                    title : item.user.name || "video",
                    src : item.video_files[0].link,
                    type : "video"
                }))
            }
            setResult(data)
            dispatch(setResults(data))
            console.log(results)
           } catch (error) {
            console.error("Error fetching data:", error)
            setError(error)
           }
        }
        getData()
    }, [activeTab, query ])

    if(error) return <p>"Erro "{error}</p>
    if(loading) return <p>Loading...</p>
  return (
    <div>
        {results.map((item, idx)=>{
            return <div key={idx}>
                {item.title}
            </div>
        })}
    </div>
  )
}

export default ResultGrid