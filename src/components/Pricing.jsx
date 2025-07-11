import React from 'react';
import wisestudioLogo from '../assets/wisestudio-logo.png';
import wisecareLogo from '../assets/wisecare-logo.png';
import wisestoreLogo from '../assets/wisestore.png';
import wisebillsLogo from '../assets/wiseBills.png';
import wisehrLogo from '../assets/wiseHR-logo.png';
import wiseerpLogo from '../assets/wiseERP.png';
import wiselmsLogo from '../assets/wiseLMS.png';
import wisecrmLogo from '../assets/wiseCRM.png';
import wiselendLogo from '../assets/wiseLend.png';

const products = [
	{
		name: 'WiseStudio',
		tag: 'Multi-Sector Digital Transformation',
		description:
			'Transform your business across all 12 sectors with our comprehensive digital platform.',
		image: wisestudioLogo,
		pricing: [
			{ type: 'Lite', monthly: '₹1,499', yearly: '₹15,000', lifetime: '₹35,000' },
			{ type: 'Pro', monthly: '₹4,999', yearly: '₹52,000', lifetime: '₹99,000' },
			{ type: 'Elite', monthly: '₹14,999', yearly: '₹155,000', lifetime: '₹2,25,000' },
		],
	},
	{
		name: 'WiseCare',
		tag: 'Next-Gen Healthcare Tech',
		description: 'Advanced healthcare management solution for superior patient care.',
		image: wisecareLogo,
		pricing: [
			{ type: 'Lite', monthly: '₹2,499', yearly: '₹25,500', lifetime: '₹49,000' },
			{ type: 'Pro', monthly: '₹7,499', yearly: '₹76,000', lifetime: '₹1,49,000' },
			{ type: 'Elite', monthly: '₹19,999', yearly: '₹199,000', lifetime: '₹2,99,000' },
		],
	},
	{
		name: 'WiseStore',
		tag: 'Future of Digital Retail',
		description: 'Powerful e-commerce platform for seamless online retail.',
		image: wisestoreLogo,
		pricing: [
			{ type: 'Lite', monthly: '₹999', yearly: '₹10,000', lifetime: '₹25,000' },
			{ type: 'Pro', monthly: '₹3,499', yearly: '₹36,000', lifetime: '₹74,000' },
			{ type: 'Elite', monthly: '₹9,999', yearly: '₹104,000', lifetime: '₹1,49,000' },
		],
	},
	{
		name: 'WiseBills',
		tag: 'Smart Invoicing Revolution',
		description: 'Intelligent invoice management with automated workflows.',
		image: wisebillsLogo,
		pricing: [
			{ type: 'Lite', monthly: '₹799', yearly: '₹8,000', lifetime: '₹19,000' },
			{ type: 'Pro', monthly: '₹2,499', yearly: '₹25,000', lifetime: '₹49,000' },
			{ type: 'Elite', monthly: '₹6,999', yearly: '₹72,000', lifetime: '₹99,000' },
		],
	}
];

const Pricing = () => (
	<section style={{
		width: '100%',
		padding: 'clamp(3rem, 6vw, 6rem) 0',
		background: 'var(--color-bg)',
		color: '#fff',
		position: 'relative',
		overflow: 'hidden',
	}}>
		<div className="container">
			<div style={{
				textAlign: 'center',
				marginBottom: 'clamp(3rem, 6vw, 4rem)',
			}}>
				<h2 style={{
					fontFamily: 'Poppins',
					fontWeight: 700,
					fontSize: 'clamp(2rem, 5vw, 3rem)',
					background: 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 30%, #94A3B8 70%, #64748B 100%)',
					backgroundClip: 'text',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					marginBottom: 16,
				}}>
					Pricing Plans
				</h2>
				<p style={{
					fontFamily: 'Open Sans',
					fontSize: 18,
					color: '#94A3B8',
					maxWidth: 600,
					margin: '0 auto',
					lineHeight: 1.6
				}}>
					Choose the perfect plan for your business needs
				</p>
			</div>

			<div style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
				gap: 'clamp(1.5rem, 3vw, 2rem)',
				maxWidth: '1400px',
				margin: '0 auto',
			}}>
				{products.map((product) => (
					<div
						key={product.name}
						style={{
							background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
							borderRadius: 24,
							padding: 'clamp(1.5rem, 3vw, 2rem)',
							border: '1px solid rgba(255, 255, 255, 0.2)',
							backdropFilter: 'blur(20px)',
							textAlign: 'center',
							transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
							position: 'relative',
							overflow: 'hidden',
							display: 'flex',
							flexDirection: 'column',
							minHeight: '600px',
						}}
					>
						<div style={{
							width: 80,
							height: 80,
							margin: '0 auto 1rem auto',
							borderRadius: 20,
							background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							overflow: 'hidden',
							boxShadow: '0 8px 32px rgba(6, 182, 212, 0.3)',
							position: 'relative',
						}}>
							<img src={product.image} alt={product.name} style={{
								width: 60,
								height: 60,
								objectFit: 'contain',
								filter: 'brightness(1.2)',
							}} />
						</div>
						<h3 style={{
							fontFamily: 'Poppins',
							fontWeight: 700,
							fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
							color: '#F1F5F9',
							marginBottom: 8,
						}}>
							{product.name}
						</h3>
						<span style={{
							background: 'var(--color-accent)',
							color: '#fff',
							borderRadius: 8,
							padding: '2px 12px',
							fontSize: 'clamp(12px, 2.5vw, 14px)',
							fontWeight: 600,
							marginBottom: 8,
							display: 'inline-block',
							textAlign: 'center',
						}}>
							{product.tag}
						</span>
						<p style={{
							fontFamily: 'Open Sans',
							fontSize: 'clamp(14px, 2.5vw, 16px)',
							textAlign: 'center',
							marginBottom: 12,
							minHeight: 'auto',
							lineHeight: 1.5,
						}}>
							{product.description}
						</p>
						
						<div style={{width: '100%', marginTop: 'auto'}}>
							<div style={{
								width: '100%', 
								overflowX: 'auto', 
								WebkitOverflowScrolling: 'touch'
							}}>
								<table style={{
									width: '100%', 
									borderCollapse: 'collapse', 
									fontFamily: 'Open Sans', 
									fontSize: 'clamp(12px, 2.5vw, 15px)', 
									background: 'rgba(255,255,255,0.06)', 
									borderRadius: 12, 
									overflow: 'hidden', 
									boxShadow: '0 2px 12px rgba(30,58,138,0.06)',
									minWidth: '280px'
								}}>
									<thead>
										<tr style={{background: 'rgba(6,182,212,0.10)'}}>
											<th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)', fontSize: 'clamp(11px, 2vw, 13px)'}}>Type</th>
											<th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)', fontSize: 'clamp(11px, 2vw, 13px)'}}>Monthly</th>
											<th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)', fontSize: 'clamp(11px, 2vw, 13px)'}}>Yearly</th>
											<th style={{padding: '6px 8px', fontWeight: 700, color: 'var(--color-accent)', borderBottom: '1px solid rgba(30,58,138,0.08)', fontSize: 'clamp(11px, 2vw, 13px)'}}>Lifetime</th>
										</tr>
									</thead>
									<tbody>
										{product.pricing && product.pricing.map((plan) => (
											<tr key={plan.type} style={{background: plan.type === 'Elite' ? 'rgba(249,115,22,0.08)' : 'transparent'}}>
												<td style={{padding: '6px 8px', fontWeight: 600, color: plan.type === 'Elite' ? 'var(--color-secondary)' : '#fff', fontSize: 'clamp(11px, 2vw, 13px)'}}>{plan.type}</td>
												<td style={{padding: '6px 8px', fontSize: 'clamp(11px, 2vw, 13px)'}}>{plan.monthly}</td>
												<td style={{padding: '6px 8px', fontSize: 'clamp(11px, 2vw, 13px)'}}>{plan.yearly}</td>
												<td style={{padding: '6px 8px', fontSize: 'clamp(11px, 2vw, 13px)'}}>{plan.lifetime}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	</section>
);

export default Pricing;
