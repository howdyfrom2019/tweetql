import { useCallback, useEffect, useState } from 'react';

export const useMp3Loader = (): [resources: string[]] => {
  const [musicResources, setMusicResources] = useState<string[]>([]);

  const syncImporters = useCallback(() => {
    const promises: Promise<typeof import("*.mp3")>[] = [];
    for (let i = 0; i < 1; i++) {
      promises.push(import('../assets/music/1.mp3'));
    }

    Promise.all(promises).then((values) => {
      setMusicResources(values.map(v => v.default));
    })
  }, []);

  useEffect(() => {
    syncImporters();
  }, []);

  return [musicResources];
}
