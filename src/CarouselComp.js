import { Carousel, Image } from "antd";

function CarouselComp(){
    return(

    <Carousel autoplay>
    <Image height={250} preview={false} src="CakeSale.jfif"></Image>
    <Image height={250} preview={false} src="CakeSale1.jfif"></Image>
    <Image height={250} preview={false} src="offer.jfif" width={1000}></Image>
  </Carousel>
    )
}

export default CarouselComp