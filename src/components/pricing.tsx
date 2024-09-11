import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import { ArrowUpRight, Check } from 'lucide-react'
import { Button } from './ui/button'

const Pricing = () => {
	return (
		<section
			id='Pricing'
			className='mx-auto max-w-[980px] flex flex-col items-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
			<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-16'>
				Plans & Pricing
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 py-4 w-full md:py-10 gap-4'>
				<Card className='w-full border-black border-2 relative'>
					<div className='absolute top-0 right-0 px-3 py-1.5 bg-black text-white text-sm rounded-bl-lg'>
						<h1>Most Popular 🔥</h1>
					</div>
					<CardHeader className='pt-4'>
						<CardTitle className='font-ubuntu font-medium text-xl'>
							Fy-siters
						</CardTitle>
						<CardDescription className='leading-tight font-light text-muted-foreground'>
							<span className='font-semibold text-black'>600K</span>
							/year
						</CardDescription>
					</CardHeader>
					<CardContent className='font-light text-sm md:text-base pt-4'>
						<ul>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								Live preview link provided while developing
							</li>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								Hosting & Domain (.co.id, .id, .com)
							</li>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								CMS (Content Management System) & Analytics
							</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button
							className='w-full'
							size='sm'>
							Subscribe <ArrowUpRight className='w-4 h-4 ml-2' />
						</Button>
					</CardFooter>
				</Card>
				<Card className='w-full'>
					<CardHeader className='pt-4'>
						<CardTitle className='font-ubuntu font-medium text-xl'>
							Fy-executives
						</CardTitle>
						<CardDescription className='font-light text-muted-foreground'>
							<span className='font-semibold text-black'>1000K</span>
							/year
						</CardDescription>
					</CardHeader>
					<CardContent className='pt-4'>
						<ul>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								Custom CMS (User-friendly, minimal)
							</li>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								Custom design and feature
							</li>
							<li className='flex items-center gap-x-2'>
								<Check className='bg-green-600 p-0.5 w-4 h-4 text-white rounded-full' />{' '}
								All Fy-siters features
							</li>
						</ul>
					</CardContent>
					<CardFooter>
						<Button
							className='w-full'
							size='sm'>
							Subscribe <ArrowUpRight className='w-4 h-4 ml-2' />
						</Button>
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}

export default Pricing
