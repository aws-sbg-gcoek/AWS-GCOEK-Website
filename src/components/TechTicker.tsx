const TECHS = [
  { label: 'AWS Lambda',       color: '#FF9900' },
  { label: 'Amazon S3',        color: '#38BDF8' },
  { label: 'DynamoDB',         color: '#22C55E' },
  { label: 'EC2',              color: '#FF9900' },
  { label: 'CloudFormation',   color: '#A855F7' },
  { label: 'Rekognition',      color: '#EC4899' },
  { label: 'AWS Amplify',      color: '#38BDF8' },
  { label: 'API Gateway',      color: '#FF9900' },
  { label: 'IoT Core',         color: '#22C55E' },
  { label: 'AWS CDK',          color: '#A855F7' },
  { label: 'Cognito',          color: '#38BDF8' },
  { label: 'CloudWatch',       color: '#FF9900' },
];

// Duplicate for seamless loop
const ITEMS = [...TECHS, ...TECHS];

export function TechTicker() {
  return (
    <div
      className="relative overflow-hidden py-3"
      style={{ borderTop: '1px solid #1E2A3A', borderBottom: '1px solid #1E2A3A', background: '#080E1A' }}
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #080E1A, transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #080E1A, transparent)' }} />

      <div className="ticker-track items-center gap-6">
        {ITEMS.map((tech, i) => (
          <div key={i} className="flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-none" style={{ background: tech.color, flexShrink: 0 }} />
            <span className="tech-tag" style={{ borderColor: tech.color + '33', color: tech.color + 'CC' }}>
              {tech.label}
            </span>
            {i < ITEMS.length - 1 && (
              <span className="mx-2 font-mono text-xs" style={{ color: '#1E2A3A' }}>·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
