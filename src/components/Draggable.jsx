import React, { useState, useEffect, useRef } from 'react';

const Draggable = ({ children, className = "" }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });

    // Handle Mouse Events
    const handleMouseDown = (e) => {
        setIsDragging(true);
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y
        };
    };

    // Handle Touch Events
    const handleTouchStart = (e) => {

        const touch = e.touches[0];
        setIsDragging(true);
        dragOffset.current = {
            x: touch.clientX - position.x,
            y: touch.clientY - position.y
        };
    };

    useEffect(() => {
        // Mouse Logic
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            setPosition({
                x: e.clientX - dragOffset.current.x,
                y: e.clientY - dragOffset.current.y
            });
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        // Touch Logic
        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            setPosition({
                x: touch.clientX - dragOffset.current.x,
                y: touch.clientY - dragOffset.current.y
            });
        };

        const handleTouchEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove, { passive: false }); // passive: false to allow preventDefault if needed
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
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className={`cursor-grab select-none ${isDragging ? 'cursor-grabbing' : ''} ${className}`}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                touchAction: 'none'
            }}
        >
            {children}
        </div>
    );
};

export default Draggable;
