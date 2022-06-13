
import * as React from 'react'
import MostRecent from '../components/mostRecent'
import GlobalStyles from '../components/Global'
import PageContainer from '../components/pageContainer'
import Banner from '../components/banner'



const IndexPage = () => {
	return (
		<>
			<GlobalStyles />
			<PageContainer>
				<Banner />
				<MostRecent />
			</PageContainer>
		</>

	)
}
export default IndexPage
