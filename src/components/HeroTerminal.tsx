import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const LINES = [
  { prompt: '$ ', text: 'aws configure',                                        color: '#22C55E',  delay: 0 },
  { prompt: '  ', text: 'AWS Region: ap-south-1  ✓',                           color: '#9CA3AF',  delay: 900 },
  { prompt: '$ ', text: 'aws s3 ls',                                            color: '#22C55E',  delay: 1900 },
  { prompt: '  ', text: 'sbg-projects/   webapp-assets/   ml-models/',          color: '#38BDF8',  delay: 2800 },
  { prompt: '$ ', text: 'aws lambda list-functions',                             color: '#22C55E',  delay: 3800 },
  { prompt: '  ', text: '✓ attendance-rekognition',                             color: '#FF9900',  delay: 4700 },
  { prompt: '  ', text: '✓ health-dashboard-api',                               color: '#FF9900',  delay: 5100 },
  { prompt: '  ', text: '✓ file-storage-handler',                               color: '#FF9900',  delay: 5500 },
  { prompt: '$ ', text: 'echo "Build. Learn. Launch."',                         color: '#22C55E',  delay: 6500 },
  { prompt: '  ', text: 'Build. Learn. Launch.',                                color: '#A855F7',  delay: 7400 },
];

function useTypewriter(text: string, speed = 38) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const t = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
      else { clearInterval(t); }
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return displayed;
}

function Line({ prompt, text, color }: { prompt: string; text: string; color: string }) {
  const typed = useTypewriter(text, 35);
  return (
    <div className="flex gap-1 font-mono text-xs leading-relaxed">
      <span style={{ color: '#22C55E', flexShrink: 0 }}>{prompt}</span>
      <span style={{ color }}>{typed}<span className="terminal-cursor" /></span>
    </div>
  );
}

export function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const timers = LINES.map((line, idx) =>
      setTimeout(() => setVisibleLines(prev => [...prev, idx]), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  // Loop every ~10s
  useEffect(() => {
    const loop = setInterval(() => {
      setVisibleLines([]);
      setTimeout(() => {
        LINES.forEach((line, idx) => {
          setTimeout(() => setVisibleLines(prev => [...prev, idx]), line.delay);
        });
      }, 300);
    }, 11000);
    return () => clearInterval(loop);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="scanlines relative border-animate"
      style={{
        background: '#060D18',
        border: '1px solid #1E2A3A',
        borderRadius: 3,
        fontFamily: 'JetBrains Mono, monospace',
        minWidth: 340,
        maxWidth: 420,
      }}
    >
      {/* Window title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: '1px solid #1E2A3A', background: '#0B1220' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EC4899' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF9900' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} />
        <span className="ml-3 text-xs text-text-secondary font-mono">aws-sbg-terminal</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 space-y-1.5 min-h-[220px]">
        {LINES.map((line, idx) =>
          visibleLines.includes(idx)
            ? <Line key={idx} prompt={line.prompt} text={line.text} color={line.color} />
            : null
        )}
      </div>

      {/* Glow bottom line */}
      <div style={{ height: 2, background: '#22C55E', opacity: 0.6 }} className="glow-pulse-blue" />
    </motion.div>
  );
}
