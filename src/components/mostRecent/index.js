import { graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react';
import RecentPostCard from '../recentPostCard'
import { StyledMostRecent } from './MostRecent.styled'


const MostRecent = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	const data = useStaticQuery(graphql`
	query MyQuery {
		allPrismicPost {
		  edges {
			 node {
				uid
				data {
				  title {
					 text
				  }
				  post_data {
					 text
				  }
				  image {
					 alt
					 url
				  }
				  content {
					 text
				  }
				  author_photo {
					 alt
					 url
				  }
				  author_name {
					 text
				  }
				}
			 }
		  }
		}
	 }
	`)
	useEffect(() => {
		if (data) {
			setPosts(data.allPrismicPost.edges)
		}
	}, [data])
	useEffect(() => {
		if (posts.length) {
			setLoading(false)
		}
	}, [posts])
	return (
		<StyledMostRecent>
			<h2>Most Recent</h2>
			<div>
				{loading ? <p>loading...</p> : posts.map((el, ix) => { return (<RecentPostCard key={el.node.uid} cardData={el.node.data} />) })}
			</div>
		</StyledMostRecent>

	)
}

export default MostRecent