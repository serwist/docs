const defaultDesc = btoa("A Swiss Army knife for service workers.");

export const encodeOpenGraph = (title: string, desc?: string) => {
  if (!desc) {
    return `/og/${defaultDesc}/${btoa(title)}.png`;
  }
  return `/og/${btoa(desc)}/${btoa(title)}.png`;
};