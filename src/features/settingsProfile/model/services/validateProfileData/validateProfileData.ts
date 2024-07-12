import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const { userProfileName, country } = profile;

    const errors: ValidateProfileError[] = [];

    if (!userProfileName) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
