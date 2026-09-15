// @ts-nocheck
import React from 'react';
import { 
  Pointer, 
  Paintbrush, 
  Trash2, 
  Scissors, 
  PenTool, 
  MapPin, 
  CircleDot, 
  GitFork, 
  Layers, 
  Maximize2, 
  Minimize2, 
  Crop, 
  Compass, 
  Pipette, 
  Palette, 
  Smile,
  GitCommit,
  LayoutGrid, 
  Box, 
  ZoomIn, 
  Share2, 
  Sliders, 
  Activity, 
  Move, 
  Spline, 
  Flame,
  MousePointer2,
  Target,
  PenSquare,
  Crosshair,
  Route,
  Grid,
  Lock,
  Anchor,
  Droplets,
  ArrowRightLeft,
  Workflow,
  Network,
  Disc,
  SlidersHorizontal,
  Copy,
  Ruler,
  Maximize,
  Scan,
  Grid3x3
} from 'lucide-react';

interface ToolbarProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function Toolbar({
  activeTool,
  setActiveTool,
  collapsed,
  setCollapsed,
}: ToolbarProps) {
  const tools = [
    { id: 'SEL', label: 'Select (SEL)', icon: MousePointer2 },
    { id: 'ZOM', name: 'Zoom', label: 'Zoom Tool (ZOM)', icon: ZoomIn },
    { id: 'PEN', label: 'Vector Pen (PEN)', icon: PenTool },
    { id: 'BRS', name: 'Brush', label: 'Brush Tool (BRS)', icon: Paintbrush },
    { id: 'ERS', name: 'Eraser', label: 'Eraser Tool (ERS)', icon: Trash2 },
    { id: 'PVT', name: 'Pivot', label: 'Pivot Tool (PVT)', icon: Target },
    { id: "KNF", name: "Knife", label: "Knife Tool (KNF)", icon: Scissors },
    { id: "PIN", name: "Puppet Warp", label: "Real Puppet Warp (PIN)", icon: MapPin },
    { id: 'VST', name: 'Vector Smart Transform', label: 'VST (Vector Smart Transform)', icon: Maximize },
    { id: 'SCT', name: 'Smart Correct Tool', label: 'Smart Correct Tool (SCT)', icon: Sliders },
    { id: 'VLB', name: 'Vector Line Brush', label: 'Vector Line Brush (VLB)', icon: Ruler },
    { id: 'FIL', name: 'Fill', label: 'Fill Bucket (FIL)', icon: Palette },
    { id: 'LSO', name: 'Lasso Selection', label: 'Lasso Area & Fill (LSO)', icon: Spline },
    { id: 'FSL', name: 'Free Selection', label: 'Adjustable Selection (FSL)', icon: Scan },
    { id: 'VEX', name: 'Vector Part Isolator', label: 'Vector Part Isolator (VEX)', icon: Scissors },
    { id: 'PSE', name: 'Pose Studio', label: 'Mouth & Eye Pose Studio (PSE)', icon: Smile },
    { id: '360', name: '360° Studio', label: '360° Pseudo-3D (360)', icon: Compass },
    { id: 'WSC', name: '3D Wire Sculpt', label: '3D Wire Sculpt (WSC)', icon: Box },
    { id: 'SHP', name: 'Shape', label: 'Shapes Tool (SHP)', icon: LayoutGrid },
    { id: 'MSH', name: 'Mesh Wrap', label: 'Geometry Deform (MSH)', icon: Crop },
    { id: 'SPL', name: 'Spline Reshape', label: 'Spline Reshape (SPL)', icon: Share2 },
    { id: 'SWP', name: 'Smart Warp', label: 'Smart Pin Warp (SWP)', icon: Anchor },
    { id: 'CAG', name: 'Cage Deform', label: 'Cage Deform (CAG)', icon: Box },
    { id: 'LQB', name: 'Liquify Brush', label: 'Liquify Brush (LQB)', icon: Droplets },
    { id: 'SPD', name: 'Stroke Touch Pull', label: 'Direct Stroke Pull (SPD)', icon: Flame },
    { id: 'SPT', name: 'Stroke Direct Move', label: 'Direct Stroke Position Move (SPT)', icon: ArrowRightLeft },
    { id: 'S3D', name: '2D-to-3D Rule Engine', label: '2D-to-3D Rule Engine (S3D)', icon: Box },
    { id: 'CON', name: 'Constraint', label: 'Constraints (CON)', icon: Lock },
    { id: 'MOT', name: 'Motion Path', label: 'Motion Path (MOT)', icon: Route },
    { id: 'CPT', name: 'Curve Path', label: 'Curve Path Tool (CPT)', icon: GitFork },
    { id: 'VDF', name: 'Vector Curve Deformer', label: 'Vector Deformer (VDF)', icon: Workflow },
    { id: 'VPR', name: 'Vector Pen Reshape', label: 'Vector Pen Reshape (VPR)', icon: PenSquare },
    { id: 'PBM', name: 'Points Movement', label: 'Points Movement (PBM)', icon: Network },
    { id: 'RPD', name: 'Rigid Point Deform', label: 'Rigid Point Deform (RPD)', icon: Disc },
    { id: 'CRV', name: 'Curve Line Deformer', label: 'Curve Line Deformer (CRV)', icon: Activity },
    { id: 'EYE', name: 'Eyedropper', label: 'Eyedropper (EYE)', icon: Pipette },
    { id: 'CONTOUR_EDITOR', shortId: 'CNE', name: 'Contour Editor', label: 'Contour Editor (Bezier & Points)', icon: Crosshair },
    { id: 'CUTTER', shortId: 'CTR', name: 'Cutter', label: 'Cutter Tool (Line Trim)', icon: Scissors },
    { id: 'MASTER_CONTROLLER', shortId: 'MCT', name: 'Master Controller', label: 'Master Controllers (Widgets)', icon: SlidersHorizontal },
    { id: 'PEG_HIERARCHY', shortId: 'PEG', name: 'Peg Hierarchy', label: 'Peg Hierarchy & Rigging', icon: GitFork },
    { id: 'BONE_CURVE', shortId: 'BNC', name: 'Bone Deformer', label: 'Bone & Curve Deformer', icon: GitCommit },
    { id: 'PTS', shortId: 'PTS', name: 'Point Shape Sculptor', label: 'Point Shape Sculptor (PTS)', icon: CircleDot },
    { id: 'SCB', shortId: 'SCB', name: 'Sculpt & Correct Brush', label: 'Sculpt & Correct Brush (SCB)', icon: Paintbrush },
    { id: 'LIN', shortId: 'LIN', name: 'Line Shape Edit', label: 'Line Shape Edit (LIN)', icon: Move },
    { id: 'SWAP_STUDIO', shortId: 'SWP', name: 'Swap Studio', label: 'Swap Studio (SWP)', icon: Copy },
    { id: 'TWT', shortId: 'TWT', name: 'Twitch Tool', label: 'Twitch Tool (TWT)', icon: Crosshair },
    { id: 'MWP', shortId: 'MWP', name: 'Mesh Puppet Wrap', label: 'Mesh Wrap Puppet Wrap (MWP)', icon: Grid3x3 },
  ];

  return (
    <div
      id="anim-toolbar-container"
      className={`bg-transparent border-0 flex flex-col h-full transition-all duration-200 shrink-0 select-none ${
        collapsed ? 'w-20' : 'w-60'
      }`}
    >
      {/* Brand / Collapse Header */}
      <div className="h-14 border-0 flex items-center justify-between px-3 shrink-0">
        {!collapsed && (
          <span className="text-xs font-black uppercase tracking-wider text-amber-500 dark:text-amber-400">
            Toolbox ({tools.length})
          </span>
        )}
        <button
          id="toolbar-collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-xl bg-white hover:bg-neutral-100 text-black transition-all ml-auto cursor-pointer border-0 shadow-sm"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <Maximize2 className="w-5 h-5 stroke-[2.8]" /> : <Minimize2 className="w-5 h-5 stroke-[2.8]" />}
        </button>
      </div>

      {/* Tools List - flex flex-col gap-3 with distinct rounded cards so tools NEVER stick together */}
      <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-3 scrollbar-thin select-none items-center">
        {tools.map((t, idx) => {
          const isActive = activeTool === t.id;
          const Icon = t.icon;
          const isGroupDivider = [6, 14, 26, 36].includes(idx);
          return (
            <React.Fragment key={t.id}>
              {isGroupDivider && (
                <div className={`shrink-0 my-0.5 rounded-full bg-neutral-300 dark:bg-neutral-700/60 ${collapsed ? 'w-8 h-[2px]' : 'w-full h-[1px]'}`} />
              )}
              <button
                id={`tool-btn-${t.id}`}
                onClick={() => setActiveTool(t.id)}
                data-active-tool={isActive ? "true" : undefined}
                className={`relative group cursor-pointer border-0 shrink-0 transition-all ${
                  isActive ? 'active-tool-btn !bg-[#facc15] !text-black shadow-none scale-105 z-10' : ''
                } ${
                  collapsed
                    ? 'w-12 h-12 rounded-2xl flex items-center justify-center p-0'
                    : 'w-full flex items-center gap-3 p-3 rounded-2xl text-left'
                } ${
                  !isActive
                    ? 'bg-white hover:bg-neutral-100 text-black shadow-sm'
                    : ''
                }`}
                style={isActive ? { backgroundColor: '#facc15', color: '#000000', boxShadow: 'none' } : undefined}
                title={t.label}
              >
                <div className={`shrink-0 flex items-center justify-center ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <Icon className={`w-5.5 h-5.5 stroke-[2.8] ${isActive ? '!text-black stroke-[3.2]' : 'text-black group-hover:text-amber-600'}`} />
                </div>
                {!collapsed && (
                  <div className="overflow-hidden truncate flex-1 min-w-0">
                    <span className={`text-xs uppercase tracking-wider block font-black leading-tight ${isActive ? '!text-black font-black' : 'text-neutral-600 dark:text-neutral-400'}`}>
                      {(t as any).shortId || t.id}
                    </span>
                    <span className={`text-xs font-bold block leading-snug truncate transition-colors mt-0.5 ${isActive ? '!text-black font-black' : 'text-black group-hover:text-neutral-900'}`}>
                      {t.name || t.label.split('(')[0].trim()}
                    </span>
                  </div>
                )}

                {/* Collapsed Tooltip Overlay */}
                {collapsed && (
                  <div className="absolute left-16 bg-white border border-neutral-200 text-black text-xs font-bold px-3 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-xl">
                    <div className="text-black font-black text-xs">{t.label}</div>
                  </div>
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
