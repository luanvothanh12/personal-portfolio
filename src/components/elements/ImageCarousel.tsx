import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/elements/Carousel'
import { CardImage, CardTitle } from '@/components/elements/Card'

interface SubImageProps {
	img: string
	img_alt: string
}

interface ImageCarouselProps {
	subImages: SubImageProps[]
}

export default function ImageCarousel(props: ImageCarouselProps) {
	const { subImages } = props

	return (
		<Carousel
			className='w-full'
			opts={{
				align: 'start',
				loop: true
			}}
		>
			<CarouselContent className='-ml-2 md:-ml-4'>
				{subImages.map((sub, index) => (
					<CarouselItem key={index} className='pl-2 md:pl-4'>
						<div className='p-1'>
							<CardTitle>{sub.img_alt}</CardTitle>
							<CardImage
								className='rounded-xl border border-slate-300'
								src={sub.img}
								alt={sub.img_alt}
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className='hidden sm:block'>
				<CarouselPrevious />
			</div>
			<div className='hidden sm:block'>
				<CarouselNext />
			</div>
		</Carousel>
	)
}
