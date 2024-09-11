import { buttonVariants } from './ui/button'
import { ArrowUpRight } from 'lucide-react'

const Gallery = () => {
	return (
		<section
			id='our-work'
			className=' max-w-[980px] mx-auto py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 '>
			<div className='bg-white p-4 rounded-xl shadow-sm border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
				<div className='bg-gradient-to-tr from-indigo-700 to-black p-1.5 relative rounded-xl'>
					<div className='absolute top-0 right-0 bg-black text-white z-10 px-4 py-2 text-xs rounded-bl-xl rounded-tr-xl'>
						<h1>Recent Work ✨</h1>
					</div>
					<div className='relative group overflow-hidden rounded-lg'>
						<img
							src='work/1.png'
							className='group-hover:blur-sm transition-all'
						/>
						<a
							href='https://chakra-preview.vercel.app'
							target='_blank'
							className={buttonVariants({
								size: 'sm',

								className:
									'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
							})}>
							View Site <ArrowUpRight className='w-4 h-4 ml-2' />
						</a>
					</div>
				</div>
				{/* <div className='relative group overflow-hidden rounded-lg'>
				<img
					src='work/2.png'
					className='group-hover:blur-sm transition-all'
				/>
				<a
					href='https://rcc-rho.vercel.app'
					target='_blank'
					className={buttonVariants({
						size: 'sm',

						className:
							'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
					})}>
					View Site <ArrowUpRight className='w-4 h-4 ml-2' />
				</a>
			</div> */}
				<div className='relative group overflow-hidden rounded-lg'>
					<img
						src='work/3.png'
						className='group-hover:blur-sm transition-all'
					/>
					<a
						href='https://thelittlecloud.vercel.app'
						target='_blank'
						className={buttonVariants({
							size: 'sm',

							className:
								'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
						})}>
						View Site <ArrowUpRight className='w-4 h-4 ml-2' />
					</a>
				</div>
				<div className='relative group overflow-hidden rounded-lg'>
					<img
						src='work/4.png'
						className='group-hover:blur-sm transition-all'
					/>
					<a
						href='https://s.id/fysite'
						target='_blank'
						className={buttonVariants({
							size: 'sm',

							className:
								'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100 transition-all',
						})}>
						View Site <ArrowUpRight className='w-4 h-4 ml-2' />
					</a>
				</div>
			</div>
		</section>
	)
}

export default Gallery
