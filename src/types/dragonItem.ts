type DragonProps = {
  createdAt: string;
  name: string;
  type: string;
  id: string;
};

type DragonItem = {
  dragon: DragonProps;
};

type DragonArray = [DragonProps];

export type { DragonItem, DragonArray };
