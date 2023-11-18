import cx from 'clsx';

import styles from './style.module.css';

export function Container({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return <div className={cx(styles.container, className)}>{children}</div>;
}
