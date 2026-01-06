import React, { useState, useEffect, useRef } from 'react';

const Draggable = ({ children, className = "" }) => {
    const elementRef = useRef(null);
    const position = useRef({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragOrigin = useRef({ x: 0, y: 0 });
    const startPos = useRef({ x: 0, y: 0 });

    const updatePosition = (x, y) => {
        if (elementRef.current) {
            elementRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
        position.current = { x, y };
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragOrigin.current = { x: e.clientX, y: e.clientY };
        startPos.current = { ...position.current };
    };

    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        setIsDragging(true);
        dragOrigin.current = { x: touch.clientX, y: touch.clientY };
        startPos.current = { ...position.current };
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - dragOrigin.current.x;
            const deltaY = e.clientY - dragOrigin.current.y;
            updatePosition(startPos.current.x + deltaX, startPos.current.y + deltaY);
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            const deltaX = touch.clientX - dragOrigin.current.x;
            const deltaY = touch.clientY - dragOrigin.current.y;
            updatePosition(startPos.current.x + deltaX, startPos.current.y + deltaY);
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, { passive: false });
            window.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [isDragging]);

    return (
        <div
            ref={elementRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className={`cursor-grab select-none ${isDragging ? 'cursor-grabbing' : ''} ${className}`}
            style={{
                transform: `translate3d(${position.current.x}px, ${position.current.y}px, 0)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                touchAction: 'none',
                willChange: 'transform'
            }}
        >
            {children}
        </div>
    );
};

export default Draggable;
