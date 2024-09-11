import { ArrowUpRight, Info, Layers } from 'lucide-react'
import { buttonVariants } from './ui/button'

const Header = () => {
	return (
		<section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 pt-8 md:pt-12 lg:pt-24'>
			<a
				href='https://www.academy.fysite.id'
				target='_blank'
				className='inline-flex items-center border rounded-lg bg-muted px-3 py-1 text-xs md:text-sm font-medium'>
				<Info className='w-4 h-4' />
				<div
					data-orientation='vertical'
					role='none'
					className='shrink-0 bg-border w-[1px] mx-2 h-4'></div>{' '}
				<span>New Fysite Academy</span>
				<ArrowUpRight className='w-4 h-4 ml-2' />
			</a>
			<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]'>
				from idea to site ✨
			</h1>
			<span
				className='max-w-[750px] text-center text-sm md:text-lg text-foreground text-balance'
				data-br=':rbj:'
				data-brr='1'>
				A front-end web creation agency especially for UMKM and
				startup business
			</span>
			<div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
				<a
					href='#our-work'
					className={buttonVariants({
						size: 'sm',
						className:
							'bg-gradient-to-tr from-indigo-700 to-indigo-950 border-2 border-indigo-900',
					})}>
					<Layers className='w-4 h-4 mr-2' />
					Our work
				</a>
				<a
					href='#order-now'
					className={buttonVariants({
						size: 'sm',
						variant: 'outline',
					})}>
					Order Now <ArrowUpRight className='w-4 h-4 ml-2' />
				</a>
			</div>
		</section>
	)
}

export default Header
