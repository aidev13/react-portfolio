import Header from "../components/Header"
import PortfolioCard from "../components/Cards/PortfolioCard"



const Portfolio = () => {
  return (
    <>
      <Header>//poRtfolio</Header>
      <div className="d-flex">
      <PortfolioCard> JavaScript // a fun short quiz game</PortfolioCard>
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />

      </div>
    </>
  )
}

export default Portfolio