import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
    const [articles, setarticles]=useState([])
    const [loading, setloading]=useState(true)
    const [page, setpage]=useState(1)
    const [totalResults, settotalResults]=useState(0)  

  const updateNews= async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page}&pageSize=10`;
        // setState({loading:true})
        setloading(true)
        let data= await fetch(url);
        let parsedData= await data.json()
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
    }

  useEffect(()=>{
        updateNews();
    },[])

  const fetchMoreData = async() => {
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page+1}&pageSize=10`;
        setloading(true)
        setpage(page +1)
        let data= await fetch(url);
        let parsedData= await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
    }

  // const handleNext=async ()=>{
  //       await setpage(page +1);
  //       updateNews()
  //   }

  //  const handlePrev=async ()=>{
  //       await setpage(page -1);
  //       updateNews()
  //   }

    return (
        // console.log(page),
      <div className='main'>
         <h1>News Headlines</h1>
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!== totalResults}
          loader={<Spinner/>}
        >
         <div className="container">
         {articles.map((element)=>{
            return   <div key={element.url}>
                        <NewsItem  title={element.title} description={element.description} imgsrc={element.urlToImage} newsUrl={element.url}/>
                     </div>
            })}
         </div>
         </InfiniteScroll>
      </div>
      
    )
  }
News.defaultProps ={
    country :'in',
    category: 'general',

}
News.propTypes ={
    country :PropTypes.string,
    category: PropTypes.string,
}

export default News
