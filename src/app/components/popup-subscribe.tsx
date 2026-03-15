"use client"
import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { toast } from "sonner"
import imgDownload41 from "figma:asset/3e71587c4d1631e18396dc7e1260ca559824b18a.png";

interface PopupSubscribeProps {
	open: boolean
	onClose: () => void
}

const PopupSubscribe = ({ open, onClose }: PopupSubscribeProps) => {
	const [loading, setLoading] = useState(false)
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleSubmit = async () => {
		try {
			const url = `https://script.google.com/macros/s/AKfycbx2MZ24bWa3aQtcvM_Q7nJ5E6RJyT4_oRfvlZLnfHRhvMSCy3sksJbBIkuGjm-NNyyW/exec?email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
			setLoading(true)
			const res = await fetch(url, {
				method: "GET"
			})
			const data = await res.json()
			if (data.success) {
				toast.success("Your message has been sent successfully!")
				setEmail("")
				setMessage("")
			} else {
				toast.error("Failed to submit. Please try again.")
			}
		} catch (error) {
			toast.error("Network error")
			console.error("Error:", error)
		} finally {
			setLoading(false)
		}
	}

	const validateEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
	const error = email.trim() ? !validateEmail(email) : false
	const disabled = error || !email.trim()

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className="fixed inset-0 bg-black z-50 flex flex-col items-center"
					initial={{ y: "100%" }}
					animate={{ y: 0 }}
					exit={{ y: "100%" }}
					transition={{ type: "spring", stiffness: 200, damping: 40 }}
				>
					{/* Top badge */}
					<div className="content-stretch flex gap-[8px] items-center relative shrink-0 mt-[50px] opacity-30">
						<div className="h-[56px] relative shrink-0 w-[24px]" data-name="download (4) 1">
							<div className="absolute inset-0 overflow-hidden pointer-events-none">
								<img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
							</div>
						</div>
						<div className="font-['Phudu',sans-serif] font-bold leading-[0.86] not-italic relative shrink-0 text-[18px] text-[#FFFFFF] text-center tracking-[-0.18px] whitespace-nowrap">
							<p className="mb-0">1st world’s</p>
							<p>first app</p>
						</div>
						<div className="flex items-center justify-center relative shrink-0">
							<div className="-scale-y-100 flex-none rotate-180">
								<div className="h-[56px] relative w-[25px]" data-name="download (4) 2">
									<div className="absolute inset-0 overflow-hidden pointer-events-none">
										<img alt="" className="absolute h-[117.65%] left-[-83.33%] max-w-none top-[-8.82%] w-[266.67%]" src={imgDownload41} />
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Form centered */}
					<div className="flex-1 flex items-center justify-center">
						<div className="w-[262px] flex flex-col">
							<p className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[19.5px] tracking-[-0.3px] text-white">
								Email
							</p>
							<div className="h-2" />
							<input
								className="py-4 px-6 bg-[#121212] text-white text-[16px] placeholder:text-[#FFFFFF4D] leading-[20px] placeholder:leading-[20px] rounded-full border-2 border-[#FFFFFF17] outline-none"
								placeholder="Type your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							{error && (
								<p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
							)}
							<div className="h-4" />
							<p className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[19.5px] tracking-[-0.3px] text-white">
								{"Meet your future self. What's your move?"}
							</p>
							<div className="h-2" />
							<textarea
								className="py-4 px-6 bg-[#121212] resize-none h-[99px] text-white text-[16px] placeholder:text-[16px] leading-[20px] placeholder:leading-[20px] placeholder:text-[#FFFFFF4D] rounded-[30px] border-2 border-[#FFFFFF17] outline-none"
								placeholder="Type your answer"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<div className="h-4" />
							<button
								onClick={handleSubmit}
								disabled={disabled || loading}
								className="py-5 px-7 w-full bg-white rounded-full text-black font-[700] text-[15px] leading-[15px] tracking-[-0.6px] disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
							>
								{loading ? (
									<div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent mx-auto" />
								) : (
									"Submit"
								)}
							</button>
							<div className="h-4" />
							<p className="font-['Manrope',sans-serif] font-bold text-[15px] leading-[19.5px] bg-gradient-to-r from-[#649FFF] to-[#FF7C4D] text-center bg-clip-text text-transparent">
								Exclusive to the first 100 subscribers
							</p>
						</div>
					</div>

					{/* Bottom close button */}
					<div className="pb-8 flex justify-center">
						<button
							onClick={onClose}
							className="flex items-center gap-2 text-[#FFFFFF4D] text-[15px] font-[600] leading-[19.5px] tracking-[-0.3px] hover:text-white transition-colors cursor-pointer"
						>
							<span>✕</span>
							<span>close</span>
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default PopupSubscribe
