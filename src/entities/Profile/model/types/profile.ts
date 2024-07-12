import { Country } from '@/entities/Country';

export interface Profile {
    id?: string;
    userProfileName?: string;
    userLocation?: string;
    country?: Country;
    avatar?: string;
}
