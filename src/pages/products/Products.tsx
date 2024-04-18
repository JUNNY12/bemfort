import { Container } from "@/components/common/container/Container"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import ProductList from "@/components/specific/Products/ProductList"

export default function Products() {
  return (
    <>
      <Container tag="div">
        <Jumbotron backgroundImg="bg-products-hero" />
        <Container tag="div" styles=" px-16 py-16 lg:px-8 lg:py-8 tablet:py-4 tablet:px-4">
          <ProductList />
        </Container>
      </Container>
    </>
  )
}
