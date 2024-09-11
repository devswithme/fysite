import { ArrowUpRight, BarChart } from 'lucide-react'
import { Button, buttonVariants } from './ui/button'
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from './ui/drawer'
import { useMediaQuery } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const [trigger, setTrigger] = useState(false)
	useEffect(() => {
		if (trigger && open) setOpen(false)

		if (!open) setTrigger(false)
	}, [open, setOpen, trigger])
	return (
		<header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex h-14 max-w-screen-lg items-center'>
				<div className='flex justify-between w-full'>
					<a
						className='mr-6 flex items-center space-x-2'
						href='/'>
						<span className='font-ubuntu tracking-tighter text-2xl font-bold sm:inline-block'>
							fysite
						</span>
					</a>
					<nav className='md:items-center md:gap-4 text-sm lg:gap-6 hidden md:flex'>
						<a
							className='transition-colors hover:text-foreground/80 text-foreground/60'
							href='/'>
							Home
						</a>
						<a
							className='transition-colors hover:text-foreground/80 text-foreground/60'
							href='#our-work'>
							Our Work
						</a>
						{/* <a
							className='transition-colors hover:text-foreground/80 text-foreground/60'
							href='#testimonial'>
							Testimonial
						</a>
						<a
							className='transition-colors hover:text-foreground/80 text-foreground/60'
							href='#why-us'>
							Why us
						</a> */}
						<a
							className={buttonVariants({
								size: 'sm',
								variant: 'outline',
							})}
							href='#order-now'>
							Order Now <ArrowUpRight className='w-4 h-4 ml-2' />
						</a>
					</nav>
				</div>
				{!useMediaQuery('(min-width: 768px)') && (
					<Drawer
						open={open}
						onOpenChange={(e) => setOpen(e)}>
						<DrawerTrigger asChild>
							<Button
								size='icon'
								variant='link'>
								<BarChart className='-rotate-90' />
								<span className='sr-only'>Toggle Menu</span>
							</Button>
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader className='text-left'>
								<DrawerTitle>
									<span className='font-ubuntu tracking-tighter text-2xl font-bold sm:inline-block'>
										fysite
									</span>
								</DrawerTitle>
								<DrawerDescription>
									Navigate through each section
								</DrawerDescription>
							</DrawerHeader>

							<ol className='p-4 space-y-4'>
								<li className='text-xl font-semibold'>
									<a
										className='flex justify-between items-center'
										href='/'>
										Home
										<ArrowUpRight />
									</a>
								</li>
								<li className='text-xl font-semibold'>
									<p
										className='flex justify-between items-center cursor-pointer'
										onClick={() => {
											setTrigger(true)
											setTimeout(() => {
												window.location.href = '#our-work'
											}, 400)
										}}>
										Our Work
										<ArrowUpRight />
									</p>
								</li>
								{/* <li className='text-xl font-semibold'>
									<p
										className='flex justify-between items-center cursor-pointer'
										onClick={() => {
											setTrigger(true)
											setTimeout(() => {
												window.location.href = '#testimonial'
											}, 400)
										}}>
										Testimonial
										<ArrowUpRight />
									</p>
								</li>
								<li className='text-xl font-semibold'>
									<p
										className='flex justify-between items-center cursor-pointer'
										onClick={() => {
											setTrigger(true)
											setTimeout(() => {
												window.location.href = '#why-us'
											}, 400)
										}}>
										Why us
										<ArrowUpRight />
									</p>
								</li> */}
								<li className='text-xl font-semibold'>
									<a
										className='flex justify-between items-center cursor-pointer'
										href='#contactus'
										onClick={() => {
											setTrigger(true)
											setTimeout(() => {
												window.location.href = '#order-now'
											}, 400)
										}}>
										Order Now
										<ArrowUpRight />
									</a>
								</li>
							</ol>
							<DrawerFooter>
								<a
									href='https://wa.me/6281910090007'
									className={buttonVariants()}>
									Reach by Phone
								</a>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				)}
			</div>
		</header>
	)
}

export default Navbar
