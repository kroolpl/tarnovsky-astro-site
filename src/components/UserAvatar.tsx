import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

interface UserAvatarProps {
    url?: string | null;
    alt?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
    url,
    alt = 'User Avatar',
    fallback = 'U',
    size = 'md',
    className = ''
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8 text-[10px]',
        md: 'w-10 h-10 text-xs',
        lg: 'w-16 h-16 text-xl'
    };

    return (
        <Avatar.Root className={`inline-flex items-center justify-center overflow-hidden bg-paper border border-line select-none transition-all duration-300 rounded-none ${sizeClasses[size]} ${className}`}>
            <Avatar.Image
                className="h-full w-full object-cover"
                src={url || undefined}
                alt={alt}
            />
            <Avatar.Fallback
                className="flex h-full w-full items-center justify-center bg-paper text-ink font-bold font-mono uppercase"
                delayMs={600}
            >
                {fallback.substring(0, 2)}
            </Avatar.Fallback>
        </Avatar.Root>
    );
};
