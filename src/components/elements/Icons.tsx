import React from 'react'

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
	links: () => (
		<svg viewBox='0 0 24 24' className='size-6'>
			<path
				fill='currentColor'
				d='M10 5V3H5.375C4.06519 3 3 4.06519 3 5.375V18.625C3 19.936 4.06519 21 5.375 21H18.625C19.936 21 21 19.936 21 18.625V14H19V19H5V5H10Z'
			/>
			<path
				fill='currentColor'
				d='M21 2.99902H14V4.99902H17.586L9.29297 13.292L10.707 14.706L19 6.41302V9.99902H21V2.99902Z'
			/>
		</svg>
	),
	discord: () => (
		<svg viewBox='0 0 71 55' fill='none' className='size-6'>
			<g clipPath='url(#clip0)'>
				<path
					d='M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z'
					fill='#5865F2'
				/>
			</g>
			<defs>
				<clipPath id='clip0'>
					<rect width='71' height='55' fill='white' />
				</clipPath>
			</defs>
		</svg>
	),
	facebook: () => (
		<svg viewBox='0 0 36 36' fill='currentColor' className='size-6'>
			<path
				d='M20.181 35.87C29.094 34.791 36 27.202 36 18c0-9.941-8.059-18-18-18S0 8.059 0 18c0 8.442 5.811 15.526 13.652 17.471L14 34h5.5l.681 1.87Z'
				fill='#0766FF'
			></path>
			<path
				d='M13.651 35.471v-11.97H9.936V18h3.715v-2.37c0-6.127 2.772-8.964 8.784-8.964 1.138 0 3.103.223 3.91.446v4.983c-.425-.043-1.167-.065-2.081-.065-2.952 0-4.09 1.116-4.09 4.025V18h5.883l-1.008 5.5h-4.867v12.37a18.183 18.183 0 0 1-6.53-.399Z'
				fill='#FFFFFF'
			></path>
		</svg>
	),
	github: () => (
		<svg viewBox='0 0 24 24' fill='#010409' className='size-6'>
			<path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
		</svg>
	),
	spotify: (props: IconProps) => (
		<svg viewBox='0 0 24 24' fill='none' {...props}>
			<path
				d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM16.5625 16.4375C16.3791 16.7161 16.0145 16.8107 15.7188 16.6562C13.375 15.2188 10.4062 14.9062 6.9375 15.6875C6.71979 15.7377 6.49182 15.668 6.33945 15.5046C6.18709 15.3412 6.13348 15.1089 6.19883 14.8952C6.26417 14.6816 6.43854 14.519 6.65625 14.4688C10.4688 13.5938 13.7188 13.9688 16.375 15.5938C16.5149 15.6781 16.6141 15.816 16.6495 15.9755C16.685 16.1349 16.6535 16.3019 16.5625 16.4375ZM17.8125 13.6875C17.7053 13.8622 17.5328 13.9869 17.3333 14.0338C17.1338 14.0807 16.9238 14.0461 16.75 13.9375C14.0625 12.2812 9.96875 11.8125 6.78125 12.7812C6.5133 12.8594 6.22401 12.7887 6.02236 12.5957C5.8207 12.4027 5.73731 12.1168 5.80361 11.8457C5.8699 11.5746 6.0758 11.3594 6.34375 11.2812C9.96875 10.1875 14.5 10.7188 17.5625 12.625C17.9134 12.8575 18.0229 13.3229 17.8125 13.6875ZM17.9062 10.875C14.6875 8.96875 9.375 8.78125 6.28125 9.71875C5.81691 9.79284 5.36952 9.5115 5.23513 9.0609C5.10074 8.61031 5.32093 8.12986 5.75 7.9375C9.28125 6.875 15.1562 7.0625 18.875 9.28125C19.0893 9.40709 19.2434 9.61436 19.3023 9.85577C19.3612 10.0972 19.3198 10.3521 19.1875 10.5625C18.9054 10.9822 18.3499 11.1177 17.9062 10.875Z'
				fill='#1ED760'
			/>
		</svg>
	),
	reddit: () => (
		<svg viewBox='0 0 24 24' className='size-6'>
			<path
				d='M18.6562 12.0937C18.6273 11.2925 17.9576 10.6646 17.1562 10.6874C16.7947 10.7008 16.4503 10.8452 16.1874 11.0937C15.0534 10.3194 13.7167 9.89553 12.3437 9.87491L12.9999 6.74991L15.1249 7.18741C15.1745 7.67792 15.5742 8.05911 16.0665 8.08541C16.5588 8.11172 16.9968 7.77529 17.0984 7.29285C17.2 6.81041 16.9348 6.32593 16.4736 6.15151C16.0125 5.97709 15.4931 6.16477 15.2499 6.59366L12.8124 6.09366C12.7294 6.07532 12.6424 6.09161 12.5717 6.13879C12.5009 6.18597 12.4524 6.25995 12.4374 6.34366L11.6874 9.81241C10.295 9.83285 8.93822 10.2562 7.78117 11.0312C7.40378 10.6613 6.85593 10.5243 6.34889 10.6731C5.84184 10.8218 5.45482 11.2331 5.33704 11.7482C5.21927 12.2633 5.38915 12.8019 5.78117 13.1562C5.9047 13.2574 6.04136 13.3415 6.18742 13.4062V13.8437C6.18742 16.0937 8.81242 17.9062 12.0312 17.9062C15.2499 17.9062 17.8749 16.0937 17.8749 13.8437V13.4062C18.3572 13.146 18.6574 12.6417 18.6562 12.0937Z'
				fill='white'
			/>
			<path
				d='M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM18.6562 12.0938C18.6274 11.2926 17.9576 10.6647 17.1562 10.6875C16.7947 10.7009 16.4504 10.8453 16.1875 11.0937C15.0534 10.3194 13.7168 9.89562 12.3438 9.875L13 6.75L15.125 7.1875C15.1746 7.67801 15.5743 8.0592 16.0666 8.0855C16.5589 8.1118 16.9969 7.77537 17.0985 7.29294C17.2 6.8105 16.9348 6.32602 16.4737 6.1516C16.0126 5.97718 15.4931 6.16486 15.25 6.59375L12.8125 6.09375C12.7295 6.07541 12.6425 6.0917 12.5718 6.13888C12.501 6.18605 12.4525 6.26004 12.4375 6.34375L11.6875 9.8125C10.295 9.83294 8.93829 10.2562 7.78125 11.0312C7.40385 10.6614 6.85601 10.5244 6.34897 10.6732C5.84192 10.8219 5.45489 11.2332 5.33712 11.7483C5.21934 12.2634 5.38922 12.8019 5.78125 13.1562C5.90478 13.2575 6.04143 13.3416 6.1875 13.4062V13.8438C6.1875 16.0937 8.8125 17.9062 12.0312 17.9062C15.25 17.9062 17.875 16.0937 17.875 13.8438V13.4062C18.3573 13.1461 18.6575 12.6418 18.6562 12.0938ZM8.65625 13.0937C8.65625 12.5415 9.10396 12.0938 9.65625 12.0938C10.2085 12.0938 10.6562 12.5415 10.6562 13.0937C10.6562 13.646 10.2085 14.0937 9.65625 14.0937C9.39001 14.0971 9.13368 13.9929 8.9454 13.8046C8.75712 13.6163 8.65286 13.36 8.65625 13.0937ZM14.4688 15.875C13.758 16.4015 12.8823 16.6564 12 16.5937C11.1126 16.6189 10.2427 16.3436 9.53125 15.8125C9.44565 15.6975 9.45905 15.5368 9.5625 15.4375C9.65758 15.3429 9.81117 15.3429 9.90625 15.4375C10.5135 15.8764 11.2515 16.0967 12 16.0625C12.7428 16.0882 13.475 15.8806 14.0938 15.4687C14.2107 15.3687 14.3831 15.3687 14.5 15.4687C14.625 15.5625 14.5625 15.7812 14.4688 15.875ZM13.2812 13.0937C13.2812 12.5415 13.729 12.0938 14.2812 12.0938C14.8335 12.0938 15.2813 12.5415 15.2813 13.0937C15.2813 13.646 14.8335 14.0937 14.2812 14.0937C14.015 14.0971 13.7587 13.9929 13.5704 13.8046C13.3821 13.6163 13.2779 13.36 13.2812 13.0937Z'
				fill='#FF4500'
			/>
		</svg>
	),
	instagram: () => (
		<svg viewBox='0 0 48 48' className='size-6'>
			<radialGradient
				id='yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1'
				cx='19.38'
				cy='42.035'
				r='44.899'
				gradientUnits='userSpaceOnUse'
			>
				<stop offset='0' stopColor='#fd5'></stop>
				<stop offset='.328' stopColor='#ff543f'></stop>
				<stop offset='.348' stopColor='#fc5245'></stop>
				<stop offset='.504' stopColor='#e64771'></stop>
				<stop offset='.643' stopColor='#d53e91'></stop>
				<stop offset='.761' stopColor='#cc39a4'></stop>
				<stop offset='.841' stopColor='#c837ab'></stop>
			</radialGradient>
			<path
				fill='url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)'
				d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'
			></path>
			<radialGradient
				id='yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2'
				cx='11.786'
				cy='5.54'
				r='29.813'
				gradientTransform='matrix(1 0 0 .6663 0 1.849)'
				gradientUnits='userSpaceOnUse'
			>
				<stop offset='0' stopColor='#4168c9'></stop>
				<stop offset='.999' stopColor='#4168c9' stopOpacity='0'></stop>
			</radialGradient>
			<path
				fill='url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)'
				d='M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z'
			></path>
			<path
				fill='#fff'
				d='M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z'
			></path>
			<circle cx='31.5' cy='16.5' r='1.5' fill='#fff'></circle>
			<path
				fill='#fff'
				d='M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z'
			></path>
		</svg>
	),
	steam: () => (
		<svg viewBox='0 0 24 24' className='size-6'>
			<defs>
				<linearGradient
					id='linear0'
					gradientUnits='userSpaceOnUse'
					x1='0.5'
					y1='0'
					x2='0.5'
					y2='1'
					gradientTransform='matrix(23.605469,0,0,23.632812,0.195312,0.183594)'
				>
					<stop
						offset='0'
						style={{ stopColor: 'rgb(6.666667%,11.372549%,18.039216%)', stopOpacity: 1 }}
					/>
					<stop
						offset='0.212'
						style={{ stopColor: 'rgb(1.960784%,9.411765%,22.352941%)', stopOpacity: 1 }}
					/>
					<stop
						offset='0.407'
						style={{ stopColor: 'rgb(3.921569%,10.588235%,28.235294%)', stopOpacity: 1 }}
					/>
					<stop
						offset='0.581'
						style={{ stopColor: 'rgb(7.45098%,18.039216%,38.431373%)', stopOpacity: 1 }}
					/>
					<stop
						offset='0.738'
						style={{ stopColor: 'rgb(7.843137%,29.411765%,49.411765%)', stopOpacity: 1 }}
					/>
					<stop
						offset='0.873'
						style={{ stopColor: 'rgb(7.45098%,39.215686%,59.215686%)', stopOpacity: 1 }}
					/>
					<stop
						offset='1'
						style={{ stopColor: 'rgb(7.45098%,52.941176%,72.156863%)', stopOpacity: 1 }}
					/>
				</linearGradient>
			</defs>
			<g id='surface1'>
				<path
					style={{ stroke: 'none', fillRule: 'nonzero', fill: 'url(#linear0)' }}
					d='M 0.667969 15.398438 C 2.125 20.265625 6.640625 23.816406 11.984375 23.816406 C 18.511719 23.816406 23.800781 18.527344 23.800781 12 C 23.800781 5.472656 18.511719 0.183594 11.984375 0.183594 C 5.722656 0.183594 0.601562 5.054688 0.195312 11.214844 C 0.960938 12.5 1.257812 13.292969 0.664062 15.398438 Z M 0.667969 15.398438 '
				/>
				<path
					style={{
						stroke: 'none',
						fillRule: 'nonzero',
						fill: 'rgb(100%,100%,100%)',
						fillOpacity: 1
					}}
					d='M 11.375 9.039062 L 11.378906 9.097656 L 8.484375 13.300781 C 8.019531 13.277344 7.546875 13.359375 7.101562 13.542969 C 6.90625 13.621094 6.722656 13.722656 6.550781 13.839844 L 0.199219 11.222656 C 0.199219 11.222656 0.0546875 13.640625 0.664062 15.441406 L 5.152344 17.292969 C 5.375 18.300781 6.070312 19.183594 7.089844 19.605469 C 8.761719 20.300781 10.675781 19.511719 11.375 17.839844 C 11.550781 17.414062 11.636719 16.953125 11.625 16.492188 L 15.757812 13.535156 L 15.859375 13.539062 C 18.335938 13.539062 20.347656 11.519531 20.347656 9.039062 C 20.347656 6.5625 18.339844 4.550781 15.859375 4.546875 C 13.386719 4.546875 11.371094 6.5625 11.371094 9.039062 Z M 10.683594 17.550781 C 10.144531 18.84375 8.664062 19.453125 7.375 18.914062 C 6.804688 18.675781 6.339844 18.234375 6.074219 17.675781 L 7.535156 18.28125 C 8.484375 18.675781 9.574219 18.226562 9.96875 17.277344 C 10.363281 16.324219 9.917969 15.234375 8.96875 14.839844 L 7.453125 14.210938 C 8.035156 13.992188 8.699219 13.984375 9.316406 14.242188 C 9.945312 14.5 10.425781 14.988281 10.683594 15.613281 C 10.941406 16.238281 10.9375 16.929688 10.679688 17.550781 M 15.863281 12.035156 C 14.210938 12.03125 12.875 10.691406 12.875 9.042969 C 12.875 7.390625 14.214844 6.050781 15.863281 6.046875 C 17.515625 6.050781 18.851562 7.390625 18.855469 9.042969 C 18.855469 10.691406 17.515625 12.03125 15.863281 12.035156 M 13.625 9.035156 C 13.621094 7.796875 14.628906 6.789062 15.867188 6.785156 C 17.109375 6.785156 18.113281 7.792969 18.113281 9.035156 C 18.117188 10.277344 17.109375 11.285156 15.867188 11.285156 C 14.628906 11.285156 13.621094 10.277344 13.625 9.035156 Z M 13.625 9.035156 '
				/>
			</g>
		</svg>
	)
}
