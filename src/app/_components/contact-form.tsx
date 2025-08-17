"use client";
import { useState } from "react";

export default function JobRequestForm() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Web3Forms required fields
    formData.append("access_key", "533e4f23-807d-4cd8-8ee1-76061eb5264f");
    formData.append("subject", "New Job Request — typedesigns.com.au");
    formData.append("from_name", "Typedesigns Job Request");

    try {
      const r = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then(res => res.json());

      if (r.success) {
        setState("ok");
        setMsg("Thanks for sending through your job request — we’ll get back to you shortly.");
        form.reset();
        // @ts-ignore
        window.gtag?.("event", "generate_lead", { form_id: "job_request_form" });
      } else {
        setState("error"); setMsg("We've experienced an error and your request could not be sent. Alternatively, please contact us via email or phone to chat about your request.");
      }
    } catch {
      setState("error"); setMsg("We've experienced an error and your request could not be sent. Alternatively, please contact us via email or phone to chat about your request.");
    }
  }

  const input =
    "w-full bg-transparent border border-white/20 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-white/60";
  const label = "block text-xs tracking-wide mb-1";
  const fieldset = "space-y-3 mb-6";

  return (
    <form onSubmit={onSubmit} id="job_request_form" className="text-sm/6 tracking-tight">
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className={fieldset}>
        <div>
          <label className={label}>Name</label>
          <input name="name" required className={input} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={label}>Email</label>
            <input name="email" type="email" required className={input} />
          </div>
          <div>
            <label className={label}>Phone (optional)</label>
            <input name="phone" className={input} />
          </div>
        </div>
        <div>
          <label className={label}>Preferred contact</label>
          <div className="flex flex-wrap gap-4 text-xs">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="preferred_contact" value="Email" defaultChecked /> Email
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="preferred_contact" value="Phone" /> Phone
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="preferred_contact" value="Instagram" /> Text
            </label>
          </div>
        </div>
      </div>

      <div className={fieldset}>
        <div>
          <label className={label}>Service needed</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Brand Development" /> Brand Development
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Logo Design" /> Logo Design
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Signage" /> Signage
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Print Media" /> Print Media
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Web Development" /> Web Development
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" name="service[]" value="Other" /> Other
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className={label}>Location / Suburb</label>
            <input name="location" placeholder="e.g. Hobart CBD / New Norfolk" className={input} />
          </div>
          <div>
            <label className={label}>Deadline / timeframe</label>
            <input name="deadline" placeholder="e.g. ASAP / by 20 Sept / this month" className={input} />
          </div>
        </div>

        <div>
          <label className={label}>Budget (optional)</label>
          <select name="budget" className={input}>
            <option>Undecided</option>
            <option>&lt;$1,000</option>
            <option>$1,000–$3,000</option>
            <option>$3,000–$6,000</option>
            <option>$6,000+</option>
          </select>
        </div>

        <div>
          <label className={label}>Project details</label>
          <textarea
            name="details"
            rows={6}
            required
            placeholder="Sizes, materials, finishes, quantity. The more details the better!"
            className={input}
          />
        </div>

        <div>
          <label className={label}>Links to files/photos</label>
          <textarea
            name="asset_links"
            rows={3}
            placeholder="Paste Google Drive / Dropbox / image links"
            className={input}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="rounded-2xl px-4 py-2 border hover:bg-white hover:text-black transition"
      >
        {state === "sending" ? "Sending…" : "Send Job Request"}
      </button>

      {state !== "idle" && (
        <p className={`mt-3 text-xs ${state === "ok" ? "text-green-400" : "text-red-400"}`}>{msg}</p>
      )}

      <p className="mt-6 font-bold">
        Prefer email, phone or socials?
      </p>

      <p className="mt-2 underline">
        <a href="mailto:tyler@typedesigns.com.au" className="hover:underline">tyler@typedesigns.com.au</a>
        <br></br>
        <a href="tel:+61448640563" className="hover:underline">0448 640 563</a>
        <br></br>
        <a href="https://www.instagram.com/_typedesigns_/" target="_blank" className="hover:underline">Instagram</a>
        <br></br>
        <a href="https://www.facebook.com/typedesigns.au" target="_blank" className="hover:underline">Facebook</a>
      </p>
    </form>
  );
}
