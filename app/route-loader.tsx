"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

function LoaderScreen({ visible = true }: { visible?: boolean }) {
  return (
    <div
      className={`site-loader${visible ? " is-visible" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={!visible}
    >
      <div className="loader-scene" aria-hidden="true">
        <div className="loop-cubes">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="cube-item" key={index} />
          ))}
        </div>
      </div>
      <span className="visually-hidden">Loading page</span>
    </div>
  );
}

export function RouteLoadingScreen() {
  return <LoaderScreen />;
}

export default function RouteLoader({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [completedPath, setCompletedPath] = useState<string | null>(null);
  const currentPath = useRef(pathname);
  const firstLoadStartedAt = useRef<number | null>(null);
  const firstLoadComplete = useRef(false);

  useEffect(() => {
    const isInitialLoad =
      !firstLoadComplete.current && currentPath.current === pathname;

    if (isInitialLoad) {
      firstLoadStartedAt.current ??= Date.now();
      const remaining = Math.max(
        0,
        2000 - (Date.now() - firstLoadStartedAt.current),
      );
      const timer = window.setTimeout(() => {
        firstLoadComplete.current = true;
        setCompletedPath(pathname);
        window.dispatchEvent(new Event("elevated:loader-complete"));
      }, remaining);

      return () => window.clearTimeout(timer);
    }

    currentPath.current = pathname;
    const timer = window.setTimeout(() => {
      firstLoadComplete.current = true;
      setCompletedPath(pathname);
      window.dispatchEvent(new Event("elevated:loader-complete"));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <LoaderScreen visible={completedPath !== pathname} />
      {children}
    </>
  );
}
