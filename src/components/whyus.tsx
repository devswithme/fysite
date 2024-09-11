import { Check } from 'lucide-react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion'

const Whyus = () => {
	return (
		<section
			id='why-us'
			className='mx-auto max-w-[980px] flex flex-col gap-2 items-center py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'>
			<h1 className='font-ubuntu text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] mb-16'>
				Why us? & FAQ
			</h1>{' '}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-4 md:py-10 w-full'>
				<ol className='space-y-5'>
					<li>
						<h1 className='text-md md:text-xl font-light'>
							A{' '}
							<span className='font-semibold'>live preview link</span>{' '}
							provided
							<Check className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
						</h1>
						<p className='text-muted-foreground font-light text-sm md:text-md'>
							Fully control on any revision
						</p>
					</li>
					<li>
						<h1 className='text-md md:text-xl font-light'>
							<span className='font-semibold'>High customizable</span>{' '}
							design and layout
							<Check className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
						</h1>
						<p className='text-muted-foreground font-light text-sm md:text-md'>
							Any inspiration or idea can be trasnformed into site
						</p>
					</li>
					<li>
						<h1 className='text-md md:text-xl font-light'>
							Fast delivery and{' '}
							<span className='font-semibold'>affordable</span> price
							<Check className='ml-2 inline w-4 h-4 md:w-auto md:h-auto' />
						</h1>
						<p className='text-muted-foreground font-light text-sm md:text-md'>
							Processing time may take up to one week
						</p>
					</li>
				</ol>
				<div>
					<Accordion
						type='single'
						collapsible>
						<AccordionItem
							value='item-1'
							className='border-b-[0.5px]'>
							<AccordionTrigger>
								Can you copy the design from another website?
							</AccordionTrigger>
							<AccordionContent>
								Yes, of course that is one of our skills.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						type='single'
						collapsible>
						<AccordionItem
							value='item-2'
							className='border-b-[0.5px]'>
							<AccordionTrigger>
								Does this include hosting and domain costs?
							</AccordionTrigger>
							<AccordionContent>
								Yes, it is included, but the fee is subject to the
								annual subscription.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion
						type='single'
						collapsible>
						<AccordionItem
							value='item-3'
							className='border-b-[0.5px]'>
							<AccordionTrigger>
								Will my website appear on the Google search engine?
							</AccordionTrigger>
							<AccordionContent>Yes, maybe you can.</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default Whyus
