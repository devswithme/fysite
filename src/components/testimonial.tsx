import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import { Star } from 'lucide-react'

const Testimonial = () => {
	return (
		<section
			id='testimonial'
			className='mx-auto max-w-[980px] flex flex-col items-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
			<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-16'>
				What our clients say
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 py-4 md:py-10'>
				<Card className='w-full border-none rounded-none bg-transparent'>
					<CardHeader className='px-0 py-4 pt-0 md:pt-0 md:pr-6'>
						<CardTitle className='font-ubuntu font-medium text-xl'>
							Leonard Kusnadi
						</CardTitle>
						<CardDescription className='leading-tight font-light text-muted-foreground'>
							One of the Founders of{' '}
							<span className='font-semibold text-black'>Chakra</span>
						</CardDescription>
					</CardHeader>
					<CardContent className='font-light text-sm md:text-base px-0 md:pr-6'>
						Websitenya oke, keren banget. Semua revisi diselesaiin
						cepet dan sesuai kebutuhan perusahaan.
					</CardContent>
					<CardFooter className='px-0 md:pr-6'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className='w-4 h-4 md:w-auto md:h-auto fill-yellow-400'
								strokeWidth={0}
							/>
						))}
					</CardFooter>
				</Card>
				<Card className='w-full border-x-0 border-y-[0.5px] md:border-y-0 rounded-none md:border-x-[0.5px] bg-transparent'>
					<CardHeader className='px-0 py-4 md:pt-0 md:px-6'>
						<CardTitle className='font-ubuntu font-medium text-xl '>
							Anggun Kesumasari
						</CardTitle>
						<CardDescription className='font-light text-muted-foreground'>
							Founder of{' '}
							<span className='font-semibold text-black'>
								Angie's Cake Denpasar
							</span>
						</CardDescription>
					</CardHeader>
					<CardContent className='font-light text-sm md:text-base px-0 md:px-6'>
						Keren hasilnya, selain itu prosesnya cepet dan terjangkau
						harganya buat UMKM.
					</CardContent>
					<CardFooter className='px-0 md:px-6'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className='w-4 h-4 md:w-auto md:h-auto fill-yellow-400'
								strokeWidth={0}
							/>
						))}
					</CardFooter>
				</Card>
				<Card className='w-full border-none rounded-none bg-transparent'>
					<CardHeader className='px-0 py-4 md:pt-0 md:pl-6'>
						<CardTitle className='font-ubuntu font-medium text-xl'>
							Dian Mariana
						</CardTitle>
						<CardDescription className='font-light text-muted-foreground'>
							Founder of{' '}
							<span className='font-semibold text-black'>
								Queen Bee
							</span>
						</CardDescription>
					</CardHeader>
					<CardContent className='font-light text-sm md:text-base px-0 md:pl-6'>
						Murah meriah tapi hasilnya keren banget ngga rugi dah
						pokoknya order website disini.
					</CardContent>
					<CardFooter className='px-0 md:pl-6'>
						{[...Array(5)].map((_, i) => (
							<Star
								key={i}
								className='w-4 h-4 md:w-auto md:h-auto fill-yellow-400'
								strokeWidth={0}
							/>
						))}
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}

export default Testimonial
