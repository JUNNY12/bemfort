import { Container } from "@/components/common/container/Container"
import Jumbotron from "@/components/common/jumbotron/Jumbotron"
import ProductList from "@/components/specific/Products/ProductList"

export default function Products() {
  return (
    <Container tag="div">
        <Jumbotron/>
        <Container tag="div" styles="bg-white p-[64px] lg:p-[20px]">
          <ProductList /> 
        </Container>
    </Container>
  )
}
