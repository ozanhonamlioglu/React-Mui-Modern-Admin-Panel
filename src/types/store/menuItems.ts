export type MenuItems = Item[];

export type Item = {
	name: string;
	Icon: React.ElementType;
	nested?: Item[];
};
