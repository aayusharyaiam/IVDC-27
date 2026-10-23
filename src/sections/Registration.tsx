import { useState } from 'react'
import { conference, fees } from '../data/conference'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'

export function Registration() {
  const [copied, setCopied] = useState(false)
  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText('4458002100001452')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="container page-content">
      <SectionHeading kicker="Join the conversation" title="Registration" intro="Choose the right participation category and keep your payment details handy." />
      <section className="fee-panel"><div className="fee-panel-head"><div><span className="section-kicker">Registration fees</span><h2>Early ideas deserve an early start.</h2></div><span className="fee-note">Early bird till<br /><strong>15 Nov 2026</strong></span></div><div className="fee-table-wrap"><table className="fee-table"><thead><tr><th>Category</th><th>Early bird</th><th>Regular</th></tr></thead><tbody>{fees.map((fee) => <tr key={fee.category}><th>{fee.category}</th><td>{fee.earlyBird}</td><td>{fee.regular}</td></tr>)}</tbody></table></div></section>
       <div className="registration-grid">
         <section className="bank-card"><div className="card-topline"><span className="section-kicker">Payment details</span><button type="button" className="copy-button" onClick={copyAccount}><Icon name="copy" size={15} />{copied ? 'Copied' : 'Copy A/C no.'}</button></div><h2>Bank details</h2><dl className="detail-list"><div><dt>Name</dt><dd>Birla Institute of Technology</dd></div><div><dt>Bank</dt><dd>Punjab National Bank, Raja Bazar, Patna – 800014</dd></div><div><dt>Account number</dt><dd className="breakable">4458002100001452</dd></div><div><dt>IFSC code</dt><dd>PUNB0445800</dd></div></dl></section>
         <section className="registration-note"><span className="focus-icon">✦</span><span className="section-kicker">Before you register</span><h2>Register, present and participate.</h2><p>Participants should retain their transaction details. Authors should ensure that at least one author is available to present an accepted paper according to the final programme.</p><a className="button button--gold" href={conference.registrationLink} target="_blank" rel="noreferrer">Register now <Icon name="external" size={16} /></a></section>
      </div>
    </div>
  )
}
