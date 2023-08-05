import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

const HamburgerMenu = ({ open, setOpen, user, data }) => {
  const node = React.useRef();

  useOnClickOutside(node, () => {
    if (open) {
      setOpen(false);
    }
  });
  return (
    <div>
      <div ref={node} className="">
        <Menu open={open} user={user} data={data} setOpen={setOpen} />
      </div>
    </div>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #1f1e1f;
  z-index: 999999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transform: ${({ open }) => (open ? "translateY(14%)" : "translateY(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  border-top: 1px solid #808080;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  span {
    color: #fff;
    @media (max-width: 576px) {
      font-size: 1.6rem;
      text-align: center;
    }

    &:hover {
      color: #918d91;
    }
  }
`;

const Menu = ({ open, data, user, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <div className="  flex flex-col items-center gap-12">
        <div>
          <NavLink to="/">
            <span className="text-lg uppercase   w-full">Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/all/products"}>
            <span className="text-lg uppercase   w-full">All Products</span>
          </NavLink>
        </div>
        <div>
          <NavLink to={"/categories"}>
            <span className="text-lg uppercase   w-full">Categories</span>
          </NavLink>
        </div>
        <div>
          {!user ? (
            <NavLink to={"/auth"}>
              <span className="text-lg uppercase   w-full">Login</span>
            </NavLink>
          ) : (
            <>
              {data ? (
                <>
                  {data.isAdmin && (
                    <NavLink to={"/admin"}>
                      <span className="text-lg uppercase   w-full">Admin</span>
                    </NavLink>
                  )}

                  {data.isSeller && (
                    <NavLink to={"/dashboard"}>
                      <span className="text-lg uppercase   w-full">
                        Dashboard
                      </span>
                    </NavLink>
                  )}
                  {!data.isAdmin && !data.isSeller && (
                    <NavLink to={"/account"}>
                      <span className="text-lg uppercase   w-full">
                        Account
                      </span>
                    </NavLink>
                  )}
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
        <div>
          <div>
            {!user ? (
              <NavLink to={"/account"}>
                <span className="text-lg uppercase   w-full">Cart(0)</span>
              </NavLink>
            ) : (
              <>
                {data ? (
                  <>
                    {!data.isAdmin && !data.isSeller && (
                      <NavLink to={"/account"}>
                        <span className="text-lg uppercase   w-full">
                          Cart(0)
                        </span>
                      </NavLink>
                    )}
                  </>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </StyledMenu>
  );
};

export default HamburgerMenu;
