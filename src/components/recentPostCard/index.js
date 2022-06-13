import * as React from 'react'
import { StyledCard } from './PostCard.styled'

const RecentPostCard = ({ cardData }) => {
	return (
		<StyledCard>
			<img src={cardData.image.url} alt={cardData.image.alt} />
			<h3>{cardData.title.text}</h3>
			<p>{cardData.content.text}</p>
			<div>
				<div>
					<img src={cardData.author_photo.url} alt={cardData.author_photo.alt} />
					<span>{cardData.author_name.text}</span>
				</div>
				<span>{cardData.post_data.text}</span>
			</div>
		</StyledCard>
	)
}

export default RecentPostCard