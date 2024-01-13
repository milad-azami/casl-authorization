import { defineAbility } from "@casl/ability";

// "manage" and "all" are special keywords in CASL.
// "manage" represents any action and "all" represents any subject.

// const ability = defineAbility((can, cannot) => {
//   can("manage", "all");
//   cannot("delete", "user");
// }); // better definer 👇

// Dynamic function to define abilities
export const defineAbilityFor = (permissions) => {
  return defineAbility((can) => {
    Object.keys(permissions).forEach((resource) => {
      permissions[resource].forEach((permission) => {
        can(permission, resource);
      });
    });
  });
};

export default defineAbilityFor;
