export function TerminalCard() {
  return (
    <div className="w-full h-full bg-dark-terminal rounded-2xl border border-dark-border p-6 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
      {/* Traffic Lights */}
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
      </div>

      {/* Code Content */}
      <div className="text-text-secondary whitespace-pre-wrap">
        <span className="text-[#8B5CF6]">const</span> <span className="text-[#3B82F6]">mayank</span> <span className="text-[#8B5CF6]">=</span> <span className="text-[#94A3B8]">{`{`}</span>{'\n'}
        {'  '}<span className="text-[#F472B6]">name</span>: <span className="text-[#22D3EE]">"Mayank Soni"</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">alias</span>: <span className="text-[#22D3EE]">"mikeydebug"</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">college</span>: <span className="text-[#22D3EE]">"IIIT Raichur"</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">role</span>: <span className="text-[#22D3EE]">"MERN Stack Developer"</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">stack</span>: <span className="text-[#94A3B8]">[</span><span className="text-[#22D3EE]">"React"</span>, <span className="text-[#22D3EE]">"Node.js"</span>, <span className="text-[#22D3EE]">"MongoDB"</span>, <span className="text-[#22D3EE]">"Express"</span><span className="text-[#94A3B8]">]</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">tools</span>: <span className="text-[#94A3B8]">[</span><span className="text-[#22D3EE]">"Git"</span>, <span className="text-[#22D3EE]">"Postman"</span>, <span className="text-[#22D3EE]">"Figma"</span>, <span className="text-[#22D3EE]">"Adobe Suite"</span><span className="text-[#94A3B8]">]</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">leadership</span>: <span className="text-[#94A3B8]">[</span><span className="text-[#22D3EE]">"PR Head @ E-Cell"</span>, <span className="text-[#22D3EE]">"Video Lead"</span><span className="text-[#94A3B8]">]</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">vibe</span>: <span className="text-[#22D3EE]">"Ship fast. Think deep. Lift heavy."</span>,{'\n'}
        {'  '}<span className="text-[#F472B6]">open_to</span>: <span className="text-[#94A3B8]">[</span><span className="text-[#22D3EE]">"Internships"</span>, <span className="text-[#22D3EE]">"Projects"</span>, <span className="text-[#22D3EE]">"Collabs"</span><span className="text-[#94A3B8]">]</span>{'\n'}
        <span className="text-[#94A3B8]">{`}`}</span>;
      </div>
    </div>
  );
}
