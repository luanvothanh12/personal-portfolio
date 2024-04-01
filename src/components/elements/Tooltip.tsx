import {
    autoUpdate,
    flip,
    offset,
    shift,
    useClientPoint,
    useFloating,
    useHover,
    useInteractions,
} from '@floating-ui/react';
import React, {type ReactElement, useState} from 'react';

type TooltipProps = {
    content: string | ReactElement;
    movingTooltip?: boolean;
    children?: ReactElement;
    tooltipStyles?: React.CSSProperties;
};

const Tooltip = (props: TooltipProps) => {
    const { children, content, movingTooltip = false, tooltipStyles } = props;
    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: 'top',
        middleware: [
            offset(10),
            flip({
                fallbackAxisSideDirection: 'start',
            }),
            shift(),
        ],
        whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, { move: false });
    const clientPoint = useClientPoint(context, {
        enabled: movingTooltip,
        axis: 'x',
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([hover, clientPoint]);

    return (
        <>
            <div className="tooltip-trigger" ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>

            {isOpen && (
                <div className="inline-block bg-[rgba(28,28,28,0.9)] text-white rounded-md p-1 pb-10 text-xs"
                    ref={refs.setFloating}
                    style={{ ...floatingStyles, ...tooltipStyles }}
                    {...getFloatingProps()}
                >
                    {content}
                </div>
            )}
        </>
    );
};

export default Tooltip;